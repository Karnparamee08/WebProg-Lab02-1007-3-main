import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();
const port = 3000;

//-- START HELPER --
// การอ่านข้อมูลจาก petdata.json
const DATA_FILE = path.join(__dirname, 'petdb.json');

const readData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading petdb.json:", error);
        return [];
    }
};

// การเขียนข้อมูลลง petdata.json
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
};
//-- END HELPER --

app.use(express.json());
app.use(cors());

// Route: GET การดึงข้อมูลสัตว์เลี้ยงทั้งหมด
app.get('/pets', (req, res) => {
    const data = readData();
    res.json(data);
});

// Route: GET การดึงรายละเอียดข้อมูลสัตว์เลี้ยงตาม ID
app.get('/pets/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const data = readData();
    const item = data.find(item => item.petId === itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Pet not found' });
    }
});

// Route: POST การรับข้อมูลจากฟอร์มและเพิ่มรายการสัตว์เลี้ยงใหม่
app.post('/pets', (req, res) => {
    const newData = req.body;
    const data = readData();

    const newId = data.length > 0 ? Math.max(...data.map(item => item.petId)) + 1 : 1;
    const itemToAdd = { petId: newId, ...newData };

    data.push(itemToAdd);
    writeData(data);

    res.status(201).json({ message: 'Data added successfully', addedItem: itemToAdd });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
