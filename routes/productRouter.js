const router = require('express').Router()

router.route('/product')
    .get()
    .post()


router.route('/product/:id')
    .delete()
    .put()

module.exports = router