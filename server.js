const express = require('express');
const path = require('path'); 

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/getEmailLogsReport', (req, res) => {
const emailLogs = getEmailLogs(); 

const response = {
    data: emailLogs
};

res.setHeader('Content-Type', 'application/json');
res.json(response); 
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

function getEmailLogs() {
    const numLogs = 100;
    const emailLogs = [];
  
    for (let i = 1; i <= numLogs; i++) {      
      const emailLog = {
        id: i,
        subject: "Subject " + i,
        date: "Date " + i
      }
      emailLogs.push(emailLog);
    }
    return emailLogs;
  }