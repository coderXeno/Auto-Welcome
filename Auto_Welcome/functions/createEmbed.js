const {MessageEmbed}=require("discord.js");
const { description } = require("../commands/leave");
let primary="0x2f3136";
let fail="0xeb3452";
let success="0x34eb86"

module.exports=(type,description,...otherArgs)=>{
    const embed=new MessageEmbed()
        .setColor(
        primary
        )
        .setDescription(
            `${
                type=="success"
                    ?"<:SynthsuccsesEmoji:836524869986418698>"
                    :type="fail"
                    ?"<:Synthfailemoji:836524884544323624>"
                    :""
            }${description}`
        );
    if(typeof otherArgs!=="undefined"){
        if(typeof otherArgs[0]=="object"){
            let user=otherArgs[0];
            if(user.username){
                embed.setAuthor(
                    user.username,
                    user.displayAvatarURL({
                        dynamic:true
                    })
                );
            }
        }
        if(typeof otherArgs[1]==="string"){
            embed.setFooter(otherArgs[1]);
        }
        return embed;
    }
};