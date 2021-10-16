const {MessageEmbed}=require("discord.js");
const createEmbed=require("../functions/createEmbed");

module.exports={
    name: "leave",
    permissions:["MANAGE-GUILD"],
    usage:"<channel> message",
    description:"Create a message for when a user leaves the server",
    run(client,message,args){
        let channel=message.mentions.channels.first();
        if(!channel)
            return message.channel.send(createEmbed("fail","No channel was mentioned")
            );

        let msg=args.slice(1).join(" ");
        if(!msg)
            return message.channel.send(createEmbed("fail","No message was given"));
        if(msg=="default")
            msg="{member.tag} has left the server T-T"

        message.channel.send(
            createEmbed("success","Goodbye channel has been set")
        );
    },
};