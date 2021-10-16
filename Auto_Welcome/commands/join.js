const createEmbed=require("../functions/createEmbed");

module.exports={
    name:"join",
    permissions:["MANAGE_GUILD"],
    usage:"<message>",
    description:"Create a message that users get dm'ed when they join",
    run: (client,message,args)=>{
        let func=args[0]
        if(!func)
            return message.channel.send(
                createEmbed("fail","No operation was given")
            );

        if(func==="disable"){
            joinMessage
                .deleteOne({
                    Guild: message.guild.id
                })
                .exec()
                .then(()=>{
                    message.channel.send(
                        createEmbed("success","Join message has been disabled")
                    );
                });
        }
        if(func=="enable"){
            let msg=args.slice(1).join(" ");
            if(!msg)
                return message.channel.send(
                    createEmbed("fail","No message was created")
                );
            joinMessage
                .exec()
                .then(()=>{
                    message.channel.send(createEmbed("success","Enabled join message"));
                });
        }
    },
};