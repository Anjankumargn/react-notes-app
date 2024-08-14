import express from 'express';
import { connectToDb ,db} from './db.js';

const app = express();
app.use(express.json());

  app.get('/api/notes/search/:name', async (req, res) => {
    const {name}=req.params

    const searchName=await db.collection("userNotes").findOne({name});
    
    if(searchName){
        res.send("Found here");
    }else{
        res.send("Not found here");
    }
    });

    app.get('/api/notes/:name', async (req, res) => {
        const {name}=req.params
    
        const display=await db.collection("displayNotes").findOne({name});
        const {text,date}=display
        if(display){
            res.send(
                `${name}
                 ${text}
                 ${date}`
            );
        }else{
            res.send("Notes not displayed");
        }
        });
    
    app.post('/api/login', async (req, res) => {
        const {email,password}=req.body
    
        const Login=await db.collection("signupDetails").findOne({email,password});
        if(Login){
            res.json(Login);
        }else{
            res.sendStatus(404);
        }
        });

      app.post('/api/signup', async (req, res) => {
        const {password,email,firstname,lastname}=req.body
    
        const signup=await db.collection("signupDetails").insertOne({password,email,firstname,lastname});
        if(signup){
            res.json(`${password},${email},${firstname},${lastname}`);
        }else{
            res.sendStatus(404);
        }
        }); 
       
 
      app.delete('/api/deleteaccount/:name', async (req, res) => {
         const {name}=req.params;
         const deleteNotes=await db.collection("signupDetails").findOne({EmailId});
        if(deleteNotes){
            res.send("Successfully deleted");
        }else{
         res.send(`Delete account ID: ${name}`);
       }
    });



connectToDb(()=>{
    console.log("sucessfully connected to database");

app.listen(8000, ()=>{
    console.log ("Listening on http://localhost:8000")
})
});