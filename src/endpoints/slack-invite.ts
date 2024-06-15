// @ts-nocheck


export async function slackInvite(req, res) {
  // this endpoint is hit by the form on hackclub.com/slack
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: "No credentials sent!" });
    } else if (
      req.headers.authorization != `Bearer ${process.env.TrashPandaSecret}`
    ) {
      return res.status(403).json({ error: "Invalid credentials sent!" });
    } else {
      const email = req!.body!.email;

      const result = { email };
      if (email) {
        // const { ok, error } = await inviteUser(client, req.body);
        result.ok = ok;
        result.error = error;
      }
      res.json(result);
    }
  } catch (e) {
    logger(`Error in slackInvite: ${e}`, "error");
    res.status(500).json({ ok: false, error: "a fatal error occurred" });
  }
}
