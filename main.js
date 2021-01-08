var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        list: ['りんご', "いちご", "バナナ" ],
        show: true,
        methods: {
            handleClick: function(event){
                alert(events.target)
            }
        }
    }
})