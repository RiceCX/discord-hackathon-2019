module.exports = async client => {
  const link = await client.generateInvite([
    "ADMINISTRATOR",
    /* Pretty much everything -> is useless*/ "SEND_MESSAGES",
    "MANAGE_GUILD",
    "MENTION_EVERYONE"
  ]);
  return await link;
};
