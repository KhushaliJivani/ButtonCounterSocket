const client = require("../../configRedis/redisInit");
exports.buttons = async (req, res) => {
    try {
        res.render('index');
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}
exports.incrementButton = async (req, res) => {
    try {
        const color=req.body.btn;
        if (color == "red") {
            client.get('data1', function (err, result1) {
                if (result1) {
                    client.incr('data1', function (err, counter1) {
                        client.set('data1', `${counter1}`);
                    })
                    client.get('data1', function (err, result1) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: `count for red ${result1}`
                            });
                        }
                    })
                } else {
                    client.set('data1', '1')
                    client.get('data1', function (err, result1) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: `count for red ${result1}`
                            });
                        }
                    });
                }
            })
        } else if (color == "blue") {
            client.get('data2', function (err, result2) {
                if (result2) {
                    client.incr('data2', function (err, counter2) {
                        client.set('data2', `${counter2}`);
                    })
                    client.get('data2', function (err, result2) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: `count for blue ${result2}`
                            });
                        }
                    })
                } else {
                    client.set('data2', '1')
                    client.get('data2', function (err, result2) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: `count for blue ${result2}`
                            });
                        }
                    });

                }
            })
        } else {
            client.get('data3', function (err, result3) {
                if (result3) {
                    client.incr('data3', function (err, counter3) {
                        client.set('data3', `${counter3}`);
                    })
                    client.get('data3', function (err, result3) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: `count for green ${result3}`
                            });
                        }
                    })
                } else {
                    client.set('data3', '1')
                    client.get('data3', function (err, result3) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: `count for green ${result3}`
                            });
                        }
                    });

                }
            })
        }
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}