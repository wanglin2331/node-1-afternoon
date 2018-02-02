let messages =[];
let id=0;

module.exports= {
    create: (req,res)=>{
       
        const {text, time} = req.body;
        id++;
        messages.push({id, text, time});

        res.send(messages);
    },
    

    read: (req,res)=>{
        res.send(messages);
    },
    

    update: (req,res)=>{
        messages.forEach((message,index)=>{
            if (message.id===Number(req.params.id)){
                let updatedMessage = Object.assign({},message,req.body);
                messages.splice(index,1,updatedMessage)
            }
        });
        res.send(messages);
    },
    

    delete: (req,res)=>{
        messages.forEach((message,index)=>{
            if (message.id === Number(req.params.id)){
                messages.splice(index,1);
            }
        });
        res.send(messages);
    },
}