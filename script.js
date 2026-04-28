let q = [
  // ========== DOWNLOADING FREE EDITORS (1-15) ==========
  ["Q1. Which is a free code editor for Windows?", {
    "A. Notepad++": true,
    "B. Microsoft Word": false,
    "C. Adobe Photoshop": false,
    "D. Excel": false
  }],
  ["Q2. Which editor is cross-platform (Windows, Mac, Linux)?", {
    "A. WordPad": false,
    "B. Notepad (Windows only)": false,
    "C. Sublime Text": true,
    "D. Paint": false
  }],
  ["Q3. From where can you download Notepad++?", {
    "A. notepad-plus-plus.org": true,
    "B. microsoft.com": false,
    "C. adobe.com": false,
    "D. google.com": false
  }],
  ["Q4. Is Sublime Text completely free?", {
    "A. One month only": false,
    "B. Completely paid only": false,
    "C. Free trial with no time limit (nagware)": true,
    "D. Never free": false
  }],
  ["Q5. Which editor is known for being lightweight and fast?", {
    "A. Notepad++": true,
    "B. Microsoft Word": false,
    "C. PowerPoint": false,
    "D. Excel": false
  }],
  ["Q6. Which feature is common in Notepad++ and Sublime Text?", {
    "A. Image editing": false,
    "B. Spell check only": false,
    "C. Syntax highlighting": true,
    "D. Video editing": false
  }],
  ["Q7. What is the official website for Sublime Text?", {
    "A. sublimetext.com": true,
    "B. sublime.com": false,
    "C. text.com": false,
    "D. editor.com": false
  }],
  ["Q8. Which editor supports plugins/extensions?", {
    "A. Only Notepad++": false,
    "B. Neither": false,
    "C. Both Notepad++ and Sublime Text": true,
    "D. Only Sublime Text": false
  }],
  ["Q9. What is the latest stable version of Notepad++?", {
    "A. Version 0.5": false,
    "B. Version 1": false,
    "C. Version 8+": true,
    "D. Version 10 only": false
  }],
  ["Q10. Can you download Sublime Text for Mac?", {
    "A. Yes": true,
    "B. No": false,
    "C. Only Windows": false,
    "D. Only Linux": false
  }],
  ["Q11. Which editor is built into Windows by default?", {
    "A. Notepad": true,
    "B. Notepad++": false,
    "C. Sublime Text": false,
    "D. VS Code": false
  }],
  ["Q12. Is Notepad++ open source?", {
    "A. Yes": true,
    "B. No": false,
    "C. Only paid version": false,
    "D. Only for students": false
  }],
  ["Q13. Which editor has a minimap feature?", {
    "A. Windows Notepad": false,
    "B. Sublime Text": true,
    "C. WordPad": false,
    "D. Paint": false
  }],
  ["Q14. Can you use Notepad++ for coding HTML?", {
    "A. Yes": true,
    "B. No": false,
    "C. Only for Python": false,
    "D. Only for Java": false
  }],
  ["Q15. Which is NOT a code editor?", {
    "A. VS Code": false,
    "B. Notepad++": false,
    "C. Sublime Text": false,
    "D. Microsoft Excel": true,
  }],

  // ========== MAKING USE OF EDITORS (16-35) ==========
  ["Q16. What is syntax highlighting?", {
    "A. Different colors for code elements": true,
    "B. Bolding text": false,
    "C. Underlining words": false,
    "D. Italic text": false
  }],
  ["Q17. Which shortcut is used to save a file in most editors?", {
    "A. Ctrl+S": true,
    "B. Ctrl+O": false,
    "C. Ctrl+N": false,
    "D. Ctrl+P": false
  }],
  ["Q18. Which shortcut creates a new file?", {
    "A. Ctrl+S": false,
    "B. Ctrl+N": true,
    "C. Ctrl+O": false,
    "D. Ctrl+X": false
  }],
  ["Q19. Which shortcut opens an existing file?", {
    "A. Ctrl+P": false,
    "B. Ctrl+N": false,
    "C. Ctrl+O": true,
    "D. Ctrl+F": false
  }],
  ["Q20. What does Ctrl+F do in an editor?", {
    "A. Find text": true,
    "B. Save file": false,
    "C. New file": false,
    "D. Print": false
  }],
  ["Q21. What does Ctrl+H do in Notepad++?", {
    "A. Find and replace": true,
    "B. Save as": false,
    "C. Help menu": false,
    "D. Highlight all": false
  }],
  ["Q22. Which shortcut is used for Undo?", {
    "A. Ctrl+X": false,
    "B. Ctrl+Y": false,
    "C. Ctrl+Z": true,
    "D. Ctrl+C": false
  }],
  ["Q23. Which shortcut is used for Redo?", {
    "A. Ctrl+Y": true,
    "B. Ctrl+Z": false,
    "C. Ctrl+X": false,
    "D. Ctrl+A": false
  }],
  ["Q24. How do you select all text in a file?", {
    "A. Ctrl+X": false,
    "B. Ctrl+C": false,
    "C. Ctrl+A": true,
    "D. Ctrl+V": false
  }],
  ["Q25. What is line numbering in editors useful for?", {
    "A. Adding images": false,
    "B. Changing font": false,
    "C. Debugging and navigation": true,
    "D. Playing music": false
  }],
  ["Q26. Which feature shows matching brackets/parentheses?", {
    "A. Auto save": false,
    "B. Spell check": false,
    "C. Bracket matching": true,
    "D. Print preview": false
  }],
  ["Q27. What is auto-completion in code editors?", {
    "A. Suggests code while typing": true,
    "B. Saves automatically": false,
    "C. Closes editor": false,
    "D. Deletes code": false
  }],
  ["Q28. How can you zoom in/out in Sublime Text?", {
    "A. Ctrl+Plus / Ctrl+Minus": true,
    "B. Alt+Plus": false,
    "C. Shift+Plus": false,
    "D. No zoom feature": false
  }],
  ["Q29. What is split screen editing?", {
    "A. Split text color": false,
    "B. Split one file into two": false,
    "C. View multiple files side by side": true,
    "D. Split word into letters": false
  }],
  ["Q30. Which editor has multi-cursor editing?", {
    "A. WordPad": false,
    "B. Windows Notepad": false,
    "C. Sublime Text": true,
    "D. Paint": false
  }],
  ["Q31. How do you search across multiple files in Notepad++?", {
    "A. Find in Files (Ctrl+Shift+F)": true,
    "B. Ctrl+F": false,
    "C. Ctrl+H": false,
    "D. Alt+F": false
  }],
  ["Q32. What is a workspace/project in Sublime Text?", {
    "A. Collection of open files and settings": true,
    "B. A single file": false,
    "C. A folder of images": false,
    "D. Audio file": false
  }],
  ["Q33. Which menu contains Recent Files in Notepad++?", {
    "A. View menu": false,
    "B. Edit menu": false,
    "C. File menu": true,
    "D. Help menu": false
  }],
  ["Q34. What is macro recording in editors?", {
    "A. Record and replay keystrokes": true,
    "B. Record video": false,
    "C. Record audio": false,
    "D. Record mouse movements": false
  }],
  ["Q35. How do you show/hide line numbers in Notepad++?", {
    "A. Edit → Copy": false,
    "B. File → New": false,
    "C. Settings → Preferences → Editing": true,
    "D. Help → About": false
  }],

  // ========== FILE CREATION, EDITING, SAVING (36-55) ==========
  ["Q36. What is the correct way to save an HTML file?", {
    "A. filename.html": true,
    "B. filename.txt": false,
    "C. filename.doc": false,
    "D. filename.exe": false
  }],
  ["Q37. What does Save As do?", {
    "A. Delete file": false,
    "B. Auto save": false,
    "C. Save with a new name/location": true,
    "D. Print file": false
  }],
  ["Q38. Which file extension is for CSS?", {
    "A. .css": true,
    "B. .html": false,
    "C. .js": false,
    "D. .txt": false
  }],
  ["Q39. Which file extension is for JavaScript?", {
    "A. .js": true,
    "B. .css": false,
    "C. .html": false,
    "D. .php": false
  }],
  ["Q40. What happens if you close an unsaved file?", {
    "A. File is deleted": false,
    "B. Changes are saved automatically": false,
    "C. Editor asks to save changes": true,
    "D. Nothing happens": false
  }],
  ["Q41. How do you create a new folder from within Sublime Text?", {
    "A. Right-click in sidebar → New Folder": true,
    "B. File → New Folder": false,
    "C. Edit → New Folder": false,
    "D. Cannot create folder": false
  }],
  ["Q42. What is the default save location for new files?", {
    "A. C: drive root": false,
    "B. Desktop only": false,
    "C. Last used folder or Documents": true,
    "D. Recycle bin": false
  }],
  ["Q43. How can you change file encoding in Notepad++?", {
    "A. Encoding menu": true,
    "B. View menu": false,
    "C. Run menu": false,
    "D. Plugins menu": false
  }],
  ["Q44. Which encoding is standard for web pages?", {
    "A. UTF-8": true,
    "B. ANSI": false,
    "C. UTF-16": false,
    "D. ASCII only": false
  }],
  ["Q45. What is a backup file created by editors?", {
    "A. Automatic copy before saving": true,
    "B. Virus file": false,
    "C. Image file": false,
    "D. Audio file": false
  }],
  ["Q46. How do you open a file with Notepad++ from File Explorer?", {
    "A. Ctrl+Click": false,
    "B. Double click": false,
    "C. Right-click → Edit with Notepad++": true,
    "D. Alt+Enter": false
  }],
  ["Q47. What is the maximum file size Notepad++ can handle?", {
    "A. Only 100KB": false,
    "B. Only 1MB": false,
    "C. Very large (GBs, depending on RAM)": true,
    "D. Only text files": false
  }],
  ["Q48. Can Notepad++ open files from FTP?", {
    "A. Yes, with NppFTP plugin": true,
    "B. No": false,
    "C. Only paid version": false,
    "D. Only on Mac": false
  }],
  ["Q49. How do you print a file from Sublime Text?", {
    "A. File → Print": true,
    "B. Edit → Print": false,
    "C. View → Print": false,
    "D. No print option": false
  }],
  ["Q50. What does Reload from Disk do?", {
    "A. Delete file": false,
    "B. Reopen file from saved version": true,
    "C. Save file": false,
    "D. Create new file": false
  }],
  ["Q51. How do you close all open files in Notepad++?", {
    "A. File → Close All": true,
    "B. Edit → Close All": false,
    "C. View → Close All": false,
    "D. Ctrl+W repeatedly": false
  }],
  ["Q52. What is a session in Notepad++?", {
    "A. Video recording": false,
    "B. Saved list of open files": true,
    "C. Audio file": false,
    "D. Image file": false
  }],
  ["Q53. Can you compare two files in Notepad++?", {
    "A. Yes, with Compare plugin": true,
    "B. No": false,
    "C. Only in paid version": false,
    "D. Only on Linux": false
  }],
  ["Q54. What is the shortcut for Save All files?", {
    "A. Ctrl+S": false,
    "B. Ctrl+Shift+S": true,
    "C. Ctrl+Alt+S": false,
    "D. Shift+S": false
  }],
  ["Q55. How do you set file association for .html to open with Sublime?", {
    "A. Only drag and drop": false,
    "B. Cannot change": false,
    "C. Right-click → Open with → Choose default app": true,
    "D. Rename file": false
  }],

  // ========== HTML BASICS (56-80) ==========
  ["Q56. What does HTML stand for?", {
    "A. HyperText Markup Language": true,
    "B. High Tech Modern Language": false,
    "C. Hyper Transfer Markup Language": false,
    "D. Home Tool Markup Language": false
  }],
  ["Q57. What is the latest version of HTML?", {
    "A. HTML5": true,
    "B. HTML4": false,
    "C. HTML3": false,
    "D. HTML X": false
  }],
  ["Q58. Which tag defines the root of an HTML document?", {
    "A. <body>": false,
    "B. <head>": false,
    "C. <html>": true,
    "D. <title>": false
  }],
  ["Q59. Which tag contains meta information about the webpage?", {
    "A. <footer>": false,
    "B. <body>": false,
    "C. <head>": true,
    "D. <header>": false
  }],
  ["Q60. Which tag contains visible page content?", {
    "A. <head>": false,
    "B. <body>": true,
    "C. <meta>": false,
    "D. <title>": false
  }],
  ["Q61. Which HTML tag creates the largest heading?", {
    "A. <h1>": true,
    "B. <h6>": false,
    "C. <heading>": false,
    "D. <head>": false
  }],
  ["Q62. Which tag creates a paragraph?", {
    "A. <p>": true,
    "B. <para>": false,
    "C. <paragraph>": false,
    "D. <text>": false
  }],
  ["Q63. Which tag creates a hyperlink?", {
    "A. <href>": false,
    "B. <link>": false,
    "C. <a>": true,
    "D. <url>": false
  }],
  ["Q64. Which attribute specifies the URL in an <a> tag?", {
    "A. alt": false,
    "B. src": false,
    "C. href": true,
    "D. link": false
  }],
  ["Q65. Which tag inserts an image?", {
    "A. <pic>": false,
    "B. <image>": false,
    "C. <img>": true,
    "D. <src>": false
  }],
  ["Q66. What attribute in <img> specifies image path?", {
    "A. src": true,
    "B. href": false,
    "C. alt": false,
    "D. link": false
  }],
  ["Q67. Which tag creates an unordered list?", {
    "A. <li>": false,
    "B. <ol>": false,
    "C. <ul>": true,
    "D. <list>": false
  }],
  ["Q68. Which tag creates an ordered list?", {
    "A. <list>": false,
    "B. <ul>": false,
    "C. <li>": false,
    "D. <ol>": true,
  }],
  ["Q69. Which tag creates a table?", {
    "A. <td>": false,
    "B. <tab>": false,
    "C. <tr>": false,
    "D. <table>": true,
  }],
  ["Q70. Which tag creates a table row?", {
    "A. <th>": false,
    "B. <td>": false,
    "C. <tr>": true,
    "D. <table>": false
  }],
  ["Q71. Which tag creates a table cell?", {
    "A. <table>": false,
    "B. <tr>": false,
    "C. <td>": true,
    "D. <tc>": false
  }],
  ["Q72. Which tag adds a line break?", {
    "A. <br>": true,
    "B. <break>": false,
    "C. <lb>": false,
    "D. <hr>": false
  }],
  ["Q73. Which tag adds a horizontal line?", {
    "A. <line>": false,
    "B. <br>": false,
    "C. <hr>": true,
    "D. <hl>": false
  }],
  ["Q74. What is the correct doctype for HTML5?", {
    "A. <!DOCTYPE html5>": false,
    "B. <!DOCTYPE HTML5>": false,
    "C. <!DOCTYPE html>": true,
    "D. <!DOCTYPE>": false
  }],
  ["Q75. Which tag defines bold text?", {
    "A. <b>": false,
    "B. <strong>": false,
    "C. Both A and B": true,
    "D. <bold>": false
  }],
  ["Q76. Which tag defines italic text?", {
    "A. <i>": false,
    "B. <em>": false,
    "C. Both A and B": true,
    "D. <italic>": false
  }],
  ["Q77. Which tag is used for comments in HTML?", {
    "A. <!-- comment -->": true,
    "B. // comment": false,
    "C. # comment": false,
    "D. /* comment */": false
  }],
  ["Q78. Which tag creates a form for user input?", {
    "A. <form>": true,
    "B. <input>": false,
    "C. <field>": false,
    "D. <submit>": false
  }],
  ["Q79. Which input type creates a text field?", {
    "A. type='text'": true,
    "B. type='password'": false,
    "C. type='email'": false,
    "D. type='number'": false
  }],
  ["Q80. Which tag creates a dropdown list?", {
    "A. <list>": false,
    "B. <dropdown>": false,
    "C. <select>": true,
    "D. <option>": false
  }],
  ["Q81.Extersion of Wordpad flie ? ", {
    "A. .txt": false,
    "B. .rtf": true,
    "C. .html": false,
    "D. .doc": false
  }],
  ["Q 82. Which one of the following is not support by Notepad? ", {
    "A. Write": false,
    "B. Read": false,
    "C. Both": false,
    "D. Graphic": true
  }],
  ["Q 82. Notepad++ supports", {
    "A. Syntax highlight": false,
    "B. Regular expressions": false,
    "C. Auto complete": false,
    "D. All of these": true
  }],
  ["Q 83. Which one of the following not a text editor", {
    "A. Notepad": false,
    "B. Notpad--": true,
    "C. Sublime": false,
    "D. Wordpad": false
  }],
  ["Q 84. which shortcut key is used to duplicate the current line in Notepad++", {
    "A. Ctrl+Shift+D": false,
    "B. Ctrl+D": true,
    "C. Ctrl+Alt+D": false,
    "D. Alt+D": false
  }],
  ["Q 85. Ctrl+shift+F is the shortcut key for _____ in subline text editor ", {
    "A. Find": false,
    "B. Find in file": true,
    "C. Find in folder": false,
    "D. None": false
  }],
  ["Q 86. Web page editor Works on a _____ principle", {
    "A. WWW": false,
    "B. HTML": false,
    "C. WYSIWYG": true,
    "D. WYGWYSI": false
  }],
  ["Q87.What is the default extersion of the Nodepad  ", {
    "A. .txt": false,
    "B. .html": false,
    "C. .docx": false,
    "D. .js": false
  }],
 ["Q88. What is client-side scripting?", {
    "A. Runs on server": false,
    "B. Runs in browser": true,
    "C. Runs in CPU": false,
    "D. Runs in database": false
  }],
  ["Q89. Which is a client-side language?", {
    "A. JavaScript": true,
    "B. PHP": false,
    "C. SQL": false,
    "D. Java (backend)": false
  }],
  ["Q90. What is server-side scripting?", {
    "A. Runs in browser": false,
    "B. Runs on server": true,
    "C. Runs offline": false,
    "D. Runs in RAM": false
  }],
  ["Q81. Which is a server-side language?", {
    "A. PHP": true,
    "B. HTML": false,
    "C. CSS": false,
    "D. JavaScript (client-side)": false
  }],
  ["Q92. Can JavaScript be used on server-side?", {
    "A. Only for databases": false,
    "B. No, never": false,
    "C. Only for styling": false,
    "D. Yes, with Node.js": true,
  }],
  ["Q93. What is the main advantage of server-side scripting?", {
    "A. Better colors": false,
    "B. Faster animation": false,
    "C. Security & database access": true,
    "D. No need for internet": false
  }],
  ["Q94. What is the main advantage of client-side scripting?", {
    "A. Faster interactivity without reload": true,
    "B. More secure": false,
    "C. Accesses database directly": false,
    "D. No browser needed": false
  }],

  // ==================== RESPONSIVE WEB DESIGNING ====================
  ["Q95. What is responsive web design?", {
    "A. Fixed layout": false,
    "B. Adapts to different screen sizes": true,
    "C. Only mobile": false,
    "D. Only desktop": false
  }],
  ["Q96. Which CSS feature is used for responsive design?", {
    "A. Padding": false,
    "B. Margin": false,
    "C. Media Queries": true,
    "D. Color": false
  }],
  ["Q97. What is a viewport in responsive design?", {
    "A. Database table": false,
    "B. Server location": false,
    "C. User's visible area of webpage": true,
    "D. Code editor": false
  }],
  ["Q98. Which unit is relative in responsive design?", {
    "A. px": false,
    "B. em / rem / vw / vh": true,
    "C. cm": false,
    "D. mm": false
  }],
  ["Q99. What is a fluid grid in responsive design?", {
    "A. No layout": false,
    "B. Uses fixed pixels": false,
    "C. Uses percentage widths": true,
    "D. Only for mobile": false
  }],
  ["Q100. What is a breakpoint in responsive design?", {
    "A. Server crash": false,
    "B. Code error": false,
    "C. Screen width where layout changes": true,
    "D. Database limit": false
  }],
  
];  
let index = 0;
        let total = 0;
        let answered = new Array(q.length).fill(false);
        let selectedAnswers = new Array(q.length).fill(null);
        let que = document.getElementById("question");
        let feedback = document.getElementById("feedback");
        let h2 = document.createElement("h2");
        que.appendChild(h2);

        let buttons = [];
        let s_btn;
        let h_solov=document.getElementById("h_solov");
        for(let i=1;i<=q.length;i++){
            s_btn=document.createElement("button");
             s_btn.id=`sbtn${i}`;
            s_btn.className="sbtn";
            s_btn.textContent=i;
            h_solov.appendChild(s_btn);
        }
let tbtn=document.getElementsByClassName("sbtn")

        for (let i = 0; i < 4; i++) {
            let btn = document.createElement("button");
            btn.className = "b";
            btn.addEventListener("click", () => ans(btn.textContent));
            que.appendChild(btn);
            buttons.push(btn);
        }
    

        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                buttons[i].textContent = keys[i];
                buttons[i].disabled = answered[index];
                buttons[i].style.backgroundColor = ""; 
            }
          
        }





        
        function next() {
            index++;
            if (index >= q.length) {
                index = 0;
            }
            render();
        }

        function privious() {
            index--;
            if (index < 0) {
                index = q.length - 1;
            }
            render();
        }

        function ans(selectedAns) {
            if (answered[index]) return;
            let options = q[index][1];
            selectedAnswers[index] = selectedAns;
            answered[index] = true;
            let temp=index+1;
            document.getElementById(`sbtn${temp}`).style.backgroundColor="green"
            if (options[selectedAns]) {
                total++;
            }
            render();
        }

        function submitQuiz() {
            total = 0; // Recalculate total
            for (let i = 0; i < q.length; i++) {
                let options = q[i][1];
                let correctAnswer = Object.keys(options).find(key => options[key]);
                if (selectedAnswers[i] === correctAnswer) {
                    total++;
                }
            }
            if(confirm("Do you want a  submit in this test")){
                 feedback.value = total;
                // feedback.style.color = "blue";
                document.getElementById("form_main").style.display="block";
                document.getElementById("quiz").style.display="none";
                document.getElementById("hh_solov").style.display="none";
                
                document.getElementById("time").style.display="none";
                showCorrectAnswers();
                
            }
        }

        function showCorrectAnswers() {
            let current = q[index];
            let options = current[1];
            let keys = Object.keys(options);
            let correctAnswer = keys.find(key => options[key]);

            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                let btnText = btn.textContent;
                btn.disabled = true; // Disable buttons after submission
                
            }
        }

        // Whenever you render, if already submitted, show correct answer
        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                btn.textContent = keys[i];
                btn.disabled = answered[index];
                btn.style.backgroundColor = "";
            }
            feedback.textContent = "";

            // If quiz already submitted, show correct answer for this question
            if (feedback.textContent !== "") {
                showCorrectAnswers();
            }
        }
        
//rule start  
let check=document.getElementById("check_box");
let btn_info=document.getElementById("info__btn");
check.addEventListener('change', function(){
    if(this.checked){
        btn_info.style.display="block";
    }
    else{
        btn_info.style.display="none";
    }
});

function quiz_start(){
    document.getElementById("quiz").style.display="block";
    document.getElementById("hh_solov").style.display="block";
    document.getElementById("detail").style.display="none";
}





// rule end 

        function from_submit(){
            var roll_no=document.getElementById("roll").value;
            var Name=document.getElementById("name").value;
            var f_name=document.getElementById("f_name").value;
            var course=document.getElementById("course").value;
            if(roll_no =="" || Name =="" || f_name =="" || course ==""){
                alert("Please fill all info");
                return;
            }
            document.getElementById("quiz").style.display="none";
            let form_main=document.getElementById("form_main");
            let sub_msg=document.getElementById("sub_msg");
            form_main.style.display="none";
            sub_msg.style.display="block";
            //document.getElementById("form").style.display="block";
        }
    

// show pass 
let check_box=document.getElementById("remember");
let pass=document.getElementById("password")
check_box.addEventListener('change', function(){
    if(this.checked){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
});
// end show password

//login user
let user_name=""
let password=0;
let login_name=document.getElementById("user");
function login_usar(){
    if(pass.value==password && login_name.value==user_name){
        document.getElementById("detail").style.display="block";
        document.getElementById("login").style.display="none";
        //document.getElementById("quiz").style.display="block";
        

    }else{
        alert("invalid username and password");
    }
}

        let t=document.getElementById("time");
        let total_time=60*60;
        let min=59;
        let sec=60;
       


        function show_time(){
            if(sec==0){
                t.innerHTML="Time out -->"+min+": "+sec;
                sec=60;
                min--;
            }
            t.innerHTML="Time out -->"+min+": "+sec;
            sec--;
        }
    setInterval(show_time, 1000);
    let time_up=60000*60;
    setTimeout(function(){
        alert("your exam finished");
        t.style.display="none";
        submitQuiz();
        }, time_up)
            render();
            //information();


// API call for google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyY7biOATqggMBwvvWIEL6ghZVNWCBzDKsiGhfQW6bik9NV1Iw0_25VYvOP9WCGp4r8/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks you ! your test submited"))
                .catch(error => console.error('Error!', error.message))
            })
            function submit__msg(){
                

            }