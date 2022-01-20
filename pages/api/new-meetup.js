import { MongoClient } from "mongodb";
//POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Vikalp:7ODpVov8VO07Y6m5@cluster0.foqam.mongodb.net/MeetupsDB?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(200).json({ message: "Meetups inserted" });
  }
}

export default handler;