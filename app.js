const app = new Vue({

    el: "#app",
    data: {
        currentChat: 0,
        newMessage: '',
        contacts: [
            {
                name: "Franco",
                avatar: "img/img-01.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Stasera facciamo il raid, alle 21 si pulla",
                        status: "received",
                    },
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Perfetto",
                        status: "sent",
                    },
                ]
            },
            {
                name: "Maria",
                avatar: "img/img-03.png",
                visible: true,
                messages: [
                    {
                        date: "15/03/2020 18:50:55",
                        text: "Hai visto le nuove puntate di AoT?",
                        status: "sent",
                    },
                    {
                        date: "15/03/2020 18:55:55",
                        text: "No, me le vedo stasera",
                        status: "received",
                    },
                ]
            },
            {
                name: "Andrea",
                avatar: "img/img-02.png",
                visible: true,
                messages: [
                    {
                        date: "11/02/2020 11:05:55",
                        text: "Oggi andiamo a mangiare sushi, vieni?",
                        status: "received",
                    },
                    {
                        date: "11/02/2020 11:10:55",
                        text: "Assolutamente si",
                        status: "sent",
                    },
                    {
                        date: "11/02/2020 11:25:55",
                        text: "Daje",
                        status: "received",
                    },
                ]
            },
            {
                name: "Marco",
                avatar: "img/img-01.png",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Oggi usciamo?",
                        status: "received",
                    },
                    {
                        date: "10/01/2020 15:35:55",
                        text: "No",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:40:55",
                        text: "Ok bro",
                        status: "received",
                    },
                ]
            },
            
        ]
        
    },
    methods: {

        changeChat: function(chatIndex) {

            this.currentChat = chatIndex;

        },

        addNewMessage: function() {

            if (this.newMessage !== "") {

               
                this.contacts[this.currentChat].messages.push({text: this.newMessage, status: "sent"})

            }

            this.newMessage = ""
            
        },
    }




})