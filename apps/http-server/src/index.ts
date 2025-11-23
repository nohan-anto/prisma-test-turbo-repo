import express from 'express';
import { client } from '@repo/db/client';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from HTTP Server!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`HTTP Server is running on http://localhost:${PORT}`);
});

app.post("/signup", async (req, res) => {
    // Handle user signup
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data: {
            username,
            password
        }
    });
    res.json({
        message: "User signup successful",
        id: user.id
    });
}); 