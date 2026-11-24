const categories = [
  {id:"technical",name:"Technical",subtitle:"Core CS, web and software concepts",icon:"⌘",tag:"CORE SKILLS",topic:"Technical knowledge"},
  {id:"aptitude",name:"Aptitude",subtitle:"Numbers, percentages and problem solving",icon:"▦",tag:"QUANTITATIVE",topic:"Quantitative aptitude"},
  {id:"programming",name:"Programming",subtitle:"Programming logic and coding basics",icon:"</>",tag:"CODING",topic:"Programming concepts"},
  {id:"hr",name:"HR Interview",subtitle:"Interview etiquette and workplace skills",icon:"♧",tag:"SOFT SKILLS",topic:"HR interview readiness"},
  {id:"reasoning",name:"Logical Reasoning",subtitle:"Patterns, sequences and deductions",icon:"◇",tag:"THINKING",topic:"Logical reasoning"},
  {id:"computer",name:"Computer Fundamentals",subtitle:"Hardware, software and networking basics",icon:"▣",tag:"FOUNDATIONS",topic:"Computer fundamentals"}
];

// Each quiz contains 20 multiple-choice questions. The explanation is shown after every submitted answer.
const questionBank = {
technical: [
["Which data structure follows the LIFO principle?",["Queue","Stack","Tree","Graph"],1,"A stack follows Last In, First Out: the most recently added item is removed first."],
["Which HTML element is used to create a hyperlink?",["<link>","<a>","<href>","<url>"],1,"The anchor element <a> creates a hyperlink. Its href attribute stores the destination."],
["What does CSS stand for?",["Computer Style Sheets","Creative Style Syntax","Cascading Style Sheets","Colorful Sheet System"],2,"CSS stands for Cascading Style Sheets and controls the presentation of web documents."],
["Which protocol is commonly used to transfer web pages?",["FTP","HTTP","SMTP","SSH"],1,"HTTP is the Hypertext Transfer Protocol used for communication between browsers and web servers."],
["Which SQL command retrieves data from a table?",["GET","OPEN","SELECT","FETCH ALL"],2,"SELECT is used to retrieve rows and columns from one or more database tables."],
["What is the main purpose of an operating system?",["Edit images","Manage computer resources","Create websites","Compile every language"],1,"An operating system manages hardware, memory, processes, files and user interaction."],
["Which of these is a relational database?",["MongoDB","MySQL","Redis","Neo4j"],1,"MySQL stores structured data in related tables and is a relational database management system."],
["What does API stand for?",["Application Programming Interface","Applied Program Internet","Advanced Process Integration","Application Program Instruction"],0,"An API defines how software components communicate and exchange data."],
["Which Git command copies a remote repository locally?",["git push","git clone","git commit","git merge"],1,"git clone creates a local copy of an existing remote repository."],
["What is responsive web design?",["A site that replies to emails","A layout that adapts to screen sizes","A site with animations only","A faster database"],1,"Responsive design adapts layouts and content to different devices and viewport sizes."],
["Which memory is volatile?",["ROM","SSD","RAM","DVD"],2,"RAM is volatile memory, so its contents are generally lost when power is removed."],
["What is the purpose of a primary key?",["Style a table","Uniquely identify each row","Encrypt a database","Sort every column"],1,"A primary key uniquely identifies each record in a database table."],
["Which network device forwards packets between networks?",["Monitor","Router","Keyboard","Repeater only"],1,"A router forwards network packets between different networks using IP addresses."],
["What does URL stand for?",["Uniform Resource Locator","Universal Record Link","User Reference Location","Unified Routing Language"],0,"A URL is the address used to locate a resource on the internet."],
["Which testing checks individual software components?",["System testing","Unit testing","Acceptance testing","Load testing"],1,"Unit testing checks small, isolated parts of an application such as functions or methods."],
["What is the purpose of a firewall?",["Cool the CPU","Filter network traffic","Increase screen brightness","Store passwords"],1,"A firewall monitors and controls network traffic according to defined security rules."],
["Which is an example of a version control system?",["Git","HTML","HTTP","Figma"],0,"Git tracks changes to files and helps teams collaborate on code."],
["What does DBMS stand for?",["Data Backup Management Service","Database Management System","Digital Base Memory Setup","Data Binary Mapping Software"],1,"A DBMS is software used to create, manage and interact with databases."],
["Which symbol commonly begins a CSS class selector?",["#",".","@","&"],1,"A period selects elements by class in CSS, for example .card."],
["What is debugging?",["Designing a logo","Finding and fixing errors in software","Installing a printer","Compressing images"],1,"Debugging is the process of locating, understanding and correcting defects in a program."]
],
aptitude: [
["What is 25% of 240?",["40","50","60","80"],2,"25% is one quarter. 240 ÷ 4 = 60."],
["A product costs ₹800 and is discounted by 10%. What is the sale price?",["₹700","₹720","₹740","₹780"],1,"10% of ₹800 is ₹80. Sale price = ₹800 − ₹80 = ₹720."],
["What is the average of 10, 20 and 30?",["15","20","25","30"],1,"Average = (10 + 20 + 30) ÷ 3 = 20."],
["A car travels 150 km in 3 hours. What is its average speed?",["30 km/h","40 km/h","50 km/h","60 km/h"],2,"Speed = distance ÷ time = 150 ÷ 3 = 50 km/h."],
["If 5 pens cost ₹60, what is the cost of 8 pens at the same rate?",["₹84","₹90","₹96","₹100"],2,"One pen costs ₹60 ÷ 5 = ₹12. Eight pens cost 8 × ₹12 = ₹96."],
["What is the simple interest on ₹1,000 at 5% per year for 2 years?",["₹50","₹100","₹150","₹200"],1,"Simple interest = P × R × T ÷ 100 = 1000 × 5 × 2 ÷ 100 = ₹100."],
["A number increases from 80 to 100. What is the percentage increase?",["20%","25%","30%","40%"],1,"Increase = 20. Percentage increase = 20 ÷ 80 × 100 = 25%."],
["What is 3/4 of 64?",["32","40","48","56"],2,"64 × 3/4 = 16 × 3 = 48."],
["If x + 7 = 19, what is x?",["10","11","12","13"],2,"Subtract 7 from both sides: x = 19 − 7 = 12."],
["A train covers 240 km at 60 km/h. How long does it take?",["2 hours","3 hours","4 hours","5 hours"],2,"Time = distance ÷ speed = 240 ÷ 60 = 4 hours."],
["What is the ratio of 12 to 18 in simplest form?",["2:3","3:2","4:5","6:9"],0,"Divide both terms by their greatest common divisor, 6. The ratio is 2:3."],
["A class has 20 students, and 5 are absent. What percentage is present?",["25%","50%","75%","80%"],2,"15 students are present. 15 ÷ 20 × 100 = 75%."],
["What is the next multiple of 9 after 63?",["66","70","72","81"],2,"The multiples are 9, 18, …, 63, 72. The next is 72."],
["If 4 workers finish a task in 6 days, how many worker-days is the task?",["10","18","24","30"],2,"Total work at this rate is 4 × 6 = 24 worker-days."],
["What is the perimeter of a square with side 7 cm?",["14 cm","21 cm","28 cm","49 cm"],2,"Perimeter of a square = 4 × side = 4 × 7 = 28 cm."],
["A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?",["10%","15%","20%","25%"],2,"Profit = ₹100. Profit percentage = 100 ÷ 500 × 100 = 20%."],
["What is the LCM of 4 and 6?",["8","10","12","24"],2,"12 is the smallest positive number divisible by both 4 and 6."],
["If 2x = 36, what is x?",["16","18","20","22"],1,"Divide both sides by 2: x = 18."],
["A bag has 3 red and 2 blue balls. What is the probability of picking a blue ball?",["1/5","2/5","3/5","1/2"],1,"There are 2 blue balls out of 5 total, so the probability is 2/5."],
["What is the compound amount on ₹100 at 10% annually for 1 year?",["₹100","₹105","₹110","₹120"],2,"For one year, amount = 100 × (1 + 10/100) = ₹110."]
],
programming: [
["Which keyword declares a block-scoped variable in JavaScript?",["var","let","define","dim"],1,"let declares a block-scoped variable in JavaScript."],
["What is the output of 2 + 3 * 4 in most programming languages?",["20","14","24","Error"],1,"Multiplication has higher precedence than addition: 2 + 12 = 14."],
["Which data type stores true or false?",["String","Integer","Boolean","Array"],2,"A Boolean represents one of two logical values: true or false."],
["Which loop is commonly used when the number of iterations is known?",["for","if","switch","try"],0,"A for loop is commonly used when initialization, condition and update can be defined."],
["What is a function?",["A reusable block of code","A type of monitor","A database row","A network cable"],0,"A function groups instructions that can be called to perform a task."],
["Which operator checks strict equality in JavaScript?",["=","==","===","!="],2,"The === operator compares value and type without type coercion."],
["Which Python symbol starts a single-line comment?",["//","#","<!--",";"],1,"Python uses # to begin a single-line comment."],
["What is an array generally used for?",["Store a collection of values","Style a webpage","Connect to Wi-Fi","Compile code"],0,"An array stores multiple values in an ordered collection."],
["What does recursion mean?",["A function calling itself","A loop that never ends","Deleting a variable","Sorting strings"],0,"Recursion occurs when a function calls itself to solve smaller instances of a problem."],
["Which Python function displays output?",["input()","print()","show()","writeLine()"],1,"print() writes text or values to the standard output."],
["What is the result of 10 % 3?",["1","2","3","0"],0,"The modulo operator returns the remainder. 10 divided by 3 leaves remainder 1."],
["Which structure stores key-value pairs in Python?",["Tuple","Dictionary","Set","String"],1,"A Python dictionary stores values associated with unique keys."],
["What is an infinite loop?",["A loop that never terminates naturally","A loop with one iteration","A syntax comment","A sorted loop"],0,"An infinite loop continues indefinitely unless an exit condition or external interruption occurs."],
["Which keyword is used to define a function in Python?",["func","function","def","method"],2,"Python uses the def keyword to define a function."],
["What does IDE stand for?",["Integrated Development Environment","Internet Data Engine","Internal Design Element","Integrated Debug Extension"],0,"An IDE combines tools such as a code editor, debugger and build support."],
["Which is a valid JavaScript array?",["{1,2,3}","[1,2,3]","(1,2,3)","<1,2,3>"],1,"JavaScript array literals use square brackets, such as [1, 2, 3]."],
["What is the purpose of a conditional statement?",["Make decisions based on conditions","Store images","Create a database","Increase RAM"],0,"A conditional statement chooses which code runs based on whether an expression is true or false."],
["Which Java keyword creates an object?",["make","new","class","object"],1,"The new keyword creates an instance of a class in Java."],
["What is a syntax error?",["A rule/grammar violation in code","A slow internet connection","A hardware failure","A correct output"],0,"A syntax error occurs when code does not follow the language's grammar rules."],
["Which sorting algorithm repeatedly compares adjacent elements?",["Binary search","Bubble sort","DFS","Hashing"],1,"Bubble sort repeatedly compares adjacent items and swaps them when they are in the wrong order."]
],
hr: [
["What is a good way to answer 'Tell me about yourself'?",["Share your life story in full","Give a brief education, skills and goal summary","Only state your name","Ask the interviewer to answer first"],1,"A concise introduction should connect your education, relevant skills and career interests."],
["What should you do if you do not know an interview answer?",["Make up an answer","Stay silent","Be honest and explain how you would approach it","Blame the question"],2,"Honesty and a clear problem-solving approach are better than guessing or pretending."],
["What does punctuality communicate in a workplace?",["Lack of interest","Reliability and respect for time","Technical expertise","Creativity only"],1,"Arriving on time shows reliability and respect for other people's schedules."],
["How should you respond to constructive feedback?",["Ignore it","Argue immediately","Listen, clarify and act on it","Take it personally"],2,"Listen carefully, ask questions if needed and use feedback to improve your work."],
["Which is an example of teamwork?",["Keeping all information to yourself","Helping colleagues toward a shared goal","Avoiding discussions","Taking credit for others' work"],1,"Teamwork involves communication, cooperation and shared responsibility."],
["What is the best way to discuss a weakness?",["Say you have no weaknesses","Mention a real area and steps you take to improve","List unrelated personal details","Blame a previous teacher"],1,"A thoughtful answer shows self-awareness and a practical improvement plan."],
["What should you do before an interview?",["Research the role and organization","Memorize every website page","Avoid preparing questions","Arrive at the last minute"],0,"Research helps you understand the role and ask relevant questions."],
["Which email subject line is most professional for a job application?",["Hey!!","Job","Application for Junior Developer Role – Your Name","Please read fast"],2,"A clear subject line identifies the purpose and role professionally."],
["What is active listening?",["Planning your reply while others speak","Paying attention and confirming understanding","Interrupting frequently","Looking at your phone"],1,"Active listening means focusing on the speaker and responding to show understanding."],
["How should you handle a disagreement with a teammate?",["Escalate immediately","Discuss respectfully and focus on facts","Stop communicating","Post about it publicly"],1,"Respectful discussion and evidence-based problem solving help resolve disagreements."],
["What is a professional response to an unknown question?",["I know everything","I am not sure, but I would learn or investigate it","That is not my job","No comment"],1,"It is professional to acknowledge a knowledge gap and describe how you would find the answer."],
["Why are questions at the end of an interview useful?",["They show interest in the role","They guarantee selection","They replace your answers","They shorten the interview"],0,"Relevant questions demonstrate preparation and genuine interest in the opportunity."],
["What should a resume contain?",["False achievements","Relevant education, skills and experience","Every personal detail","Unrelated jokes"],1,"A resume should present accurate, relevant qualifications and experience clearly."],
["What does STAR stand for in behavioural interviews?",["Situation, Task, Action, Result","Skill, Talent, Ability, Role","Start, Talk, Answer, Repeat","System, Test, Apply, Review"],0,"The STAR method structures examples around Situation, Task, Action and Result."],
["How should you behave during a video interview?",["Keep the camera pointed away","Check audio, lighting and internet beforehand","Multitask visibly","Join without checking the link"],1,"Testing equipment and choosing a quiet, well-lit space helps the interview run smoothly."],
["What is a good way to show adaptability?",["Refuse all changes","Describe how you adjusted to a new task or situation","Avoid learning tools","Wait for others to solve everything"],1,"A specific example of learning or adjusting demonstrates adaptability."],
["What should you do after an interview?",["Send repeated messages","Send a brief thank-you note if appropriate","Demand a decision immediately","Contact every employee"],1,"A polite thank-you message can reinforce appreciation and interest."],
["What is workplace professionalism?",["Respectful, responsible conduct","Agreeing with everything","Never asking questions","Working without communication"],0,"Professionalism includes respect, accountability, integrity and appropriate communication."],
["How can you explain a gap in your experience?",["Invent a job","Be honest and highlight learning or relevant activities","Avoid the topic rudely","Criticize others"],1,"A truthful explanation paired with skills gained keeps the discussion constructive."],
["What is the best response when asked about salary expectations?",["Give an aggressive ultimatum","Share a researched, reasonable range and remain open to discussion","Say any amount without thought","Refuse to discuss it"],1,"A researched range based on the role and market allows a professional discussion."]
],
reasoning: [
["Find the next number: 2, 4, 8, 16, __",["18","24","32","36"],2,"Each number is multiplied by 2. The next number is 32."],
["Choose the odd one out.",["Apple","Mango","Carrot","Banana"],2,"Carrot is generally classified as a vegetable; the others are fruits."],
["If CAT is coded as DBU (each letter moves one forward), DOG is coded as:",["EPH","CNG","FQI","EOG"],0,"D→E, O→P and G→H, so DOG becomes EPH."],
["Complete the sequence: 5, 10, 15, 20, __",["22","24","25","30"],2,"The sequence increases by 5 each time. The next number is 25."],
["All roses are flowers. Which statement must be true?",["All flowers are roses","Every rose is a flower","No rose is a flower","All plants are roses"],1,"This directly restates the given relationship: every rose belongs to the group of flowers."],
["A is taller than B. B is taller than C. Who is shortest?",["A","B","C","Cannot say"],2,"The order is A > B > C, so C is the shortest."],
["Find the missing letter: A, C, E, G, __",["H","I","J","K"],1,"The sequence skips one letter each time: A, C, E, G, I."],
["If today is Monday, what day will it be after 10 days?",["Wednesday","Thursday","Friday","Saturday"],1,"Ten days is one week plus three days. Monday plus three days is Thursday."],
["Book is to Reading as Fork is to:",["Writing","Eating","Drawing","Sleeping"],1,"A book is used for reading; a fork is used for eating."],
["Find the next number: 1, 4, 9, 16, __",["20","24","25","36"],2,"These are square numbers: 1², 2², 3², 4². Next is 5² = 25."],
["If SOUTH is written as HTUOS, how is NORTH written?",["HTRON","NROTH","HTRON","HRTON"],0,"The word is reversed. NORTH becomes HTRON."],
["Which number does not belong: 3, 5, 7, 9, 11?",["3","5","9","11"],2,"9 is not prime; the other numbers are prime."],
["Ravi is facing north. He turns right, then right again. Which direction is he facing?",["East","West","South","North"],2,"North → right to East → right to South."],
["Complete the analogy: Doctor : Hospital :: Teacher : ?",["Court","School","Bank","Factory"],1,"A doctor commonly works in a hospital; a teacher commonly works in a school."],
["If 1 = A, 2 = B, 3 = C, what is 5?",["D","E","F","G"],1,"The number represents its position in the alphabet. 5 corresponds to E."],
["Find the next term: Z, X, V, T, __",["R","S","Q","P"],0,"The sequence moves backward by two letters: Z, X, V, T, R."],
["Some pens are blue. All blue things are colourful. Which follows?",["All pens are colourful","Some pens are colourful","No pens are colourful","All colourful things are pens"],1,"The pens that are blue must be colourful, so some pens are colourful."],
["Arrange from smallest to largest: 0.5, 0.05, 0.55, 0.15",["0.05, 0.15, 0.5, 0.55","0.5, 0.05, 0.15, 0.55","0.15, 0.05, 0.55, 0.5","0.05, 0.5, 0.15, 0.55"],0,"Comparing decimal values gives 0.05 < 0.15 < 0.50 < 0.55."],
["If yesterday was Friday, what is tomorrow?",["Saturday","Sunday","Monday","Thursday"],1,"If yesterday was Friday, today is Saturday and tomorrow is Sunday."],
["Find the missing number: 3, 6, 12, 24, __",["30","36","42","48"],3,"Each term doubles. 24 × 2 = 48."]
],
computer: [
["What does CPU stand for?",["Central Processing Unit","Computer Personal Utility","Central Program Upload","Core Power Unit"],0,"CPU stands for Central Processing Unit, which executes instructions."],
["Which device is used to enter text into a computer?",["Monitor","Keyboard","Speaker","Projector"],1,"A keyboard is an input device used to enter text and commands."],
["Which of these is an output device?",["Mouse","Scanner","Monitor","Microphone"],2,"A monitor displays visual output from a computer."],
["What is the full form of RAM?",["Read Access Memory","Random Access Memory","Run Active Module","Remote Allocation Memory"],1,"RAM stands for Random Access Memory and temporarily holds active data."],
["Which file extension is commonly used for a PDF document?",[".docx",".jpg",".pdf",".exe"],2,"The .pdf extension identifies a Portable Document Format file."],
["Which of these is an example of an operating system?",["Windows","Google Chrome","MS Word","Adobe Reader"],0,"Windows is an operating system that manages the computer's hardware and software."],
["What does WWW stand for?",["World Wide Web","World Web Window","Wide World Wire","Web World Work"],0,"WWW stands for World Wide Web, the system of linked resources accessed over the internet."],
["Which device connects multiple devices within a local area network?",["Switch","Printer","Webcam","Plotter"],0,"A network switch connects devices within a LAN and forwards data to the appropriate port."],
["What is malware?",["Helpful software","Malicious software","A computer cable","A backup format"],1,"Malware is software designed to harm, disrupt or gain unauthorized access to systems."],
["Which is the strongest password practice?",["Use your name","Reuse one password everywhere","Use a long unique password","Share it with friends"],2,"Long, unique passwords reduce the impact of password guessing and credential reuse."],
["What is cloud storage?",["Saving data on remote internet-accessible servers","Saving only on a keyboard","Printing files","Increasing monitor size"],0,"Cloud storage keeps data on remote servers that can be accessed over a network."],
["Which unit is larger?",["Kilobyte","Megabyte","Byte","Bit"],1,"A megabyte is larger than a kilobyte, byte and bit."],
["What does LAN stand for?",["Large Access Node","Local Area Network","Linked Application Number","Long Analog Network"],1,"A LAN connects devices within a limited area such as an office or campus."],
["Which is an example of a web browser?",["Firefox","Linux","Python","MySQL"],0,"Firefox is a web browser used to access websites."],
["What is phishing?",["A type of printer","A deceptive attempt to steal sensitive information","A backup process","A file compression tool"],1,"Phishing uses deceptive messages or websites to trick people into revealing information."],
["Which key combination commonly copies selected content on Windows?",["Ctrl + X","Ctrl + C","Ctrl + V","Ctrl + Z"],1,"Ctrl + C copies selected content to the clipboard."],
["What is the purpose of a backup?",["Delete old files","Create a recoverable copy of data","Slow down a computer","Change file names"],1,"A backup helps restore data if the original is lost, damaged or inaccessible."],
["Which address identifies a device on an IP network?",["IP address","Email subject","File extension","MAC screen"],0,"An IP address identifies a device or network interface for communication using IP."],
["What does GUI stand for?",["General User Internet","Graphical User Interface","Global Utility Input","Graph Unit Integration"],1,"A GUI lets users interact with a computer through visual elements such as windows and icons."],
["Which component supplies electrical power to a desktop computer?",["CPU","Power supply unit","RAM","Hard disk"],1,"The power supply unit converts electrical power into the voltages required by computer components."]
]
};

const categoryGrid = document.getElementById("categoryGrid");
const homeView = document.getElementById("homeView");
const categoriesView = document.getElementById("categoriesView");
const howView = document.getElementById("howView");
const quizView = document.getElementById("quizView");
const resultView = document.getElementById("resultView");
let activeCategory = null, questions = [], currentIndex = 0, selectedOption = null, correctCount = 0, wrongCount = 0, answered = false;

function renderCategories(){
  categoryGrid.innerHTML = categories.map(cat => `
    <article class="category-card">
      <span class="category-tag">${cat.tag}</span>
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.subtitle}</p>
      <button type="button" data-category="${cat.id}">Start 20-question quiz <span>→</span></button>
    </article>`).join("");
}
function showMain(){
  [homeView,categoriesView,howView].forEach(el=>el.classList.remove("hidden"));
  quizView.classList.add("hidden"); resultView.classList.add("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function showQuizArea(){
  [homeView,categoriesView,howView].forEach(el=>el.classList.add("hidden"));
  resultView.classList.add("hidden"); quizView.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function startQuiz(categoryId){
  activeCategory = categories.find(c=>c.id===categoryId);
  if(!activeCategory || !questionBank[categoryId]) return;
  questions = [...questionBank[categoryId]].sort(()=>Math.random()-.5);
  currentIndex=0; selectedOption=null; correctCount=0; wrongCount=0; answered=false;
  showQuizArea(); renderQuestion();
}
function renderQuestion(){
  const q=questions[currentIndex];
  selectedOption=null; answered=false;
  document.getElementById("quizCategoryLabel").textContent=activeCategory.name.toUpperCase();
  document.getElementById("questionCounter").textContent=`QUESTION ${currentIndex+1} OF ${questions.length}`;
  document.getElementById("progressBar").style.width=`${(currentIndex/questions.length)*100}%`;
  document.getElementById("questionTopic").textContent=activeCategory.topic;
  document.getElementById("questionText").textContent=q[0];
  document.getElementById("answeredHint").textContent="Choose the best answer.";
  document.getElementById("feedbackBox").className="feedback-box hidden";
  document.getElementById("feedbackBox").innerHTML="";
  document.getElementById("submitAnswer").disabled=true;
  document.getElementById("submitAnswer").innerHTML='Submit answer <span>→</span>';
  document.getElementById("optionsList").innerHTML=q[1].map((option,i)=>`
    <button type="button" class="option" data-option="${i}">
      <span class="option-letter">${String.fromCharCode(65+i)}</span><span>${escapeHTML(option)}</span>
    </button>`).join("");
}
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g, char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
}
function chooseOption(index){
  if(answered) return;
  selectedOption=index;
  document.querySelectorAll(".option").forEach((btn,i)=>btn.classList.toggle("selected",i===index));
  document.getElementById("submitAnswer").disabled=false;
}
function submitCurrentAnswer(){
  if(selectedOption===null || answered) return;
  answered=true;
  const q=questions[currentIndex], correctIndex=q[2], isCorrect=selectedOption===correctIndex;
  if(isCorrect) correctCount++; else wrongCount++;
  document.querySelectorAll(".option").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===correctIndex) btn.classList.add("correct");
    else if(i===selectedOption) btn.classList.add("wrong");
  });
  const feedback=document.getElementById("feedbackBox");
  feedback.className=`feedback-box ${isCorrect?"good":"bad"}`;
  feedback.innerHTML=isCorrect
    ? `<strong>✓ Correct answer!</strong>${escapeHTML(q[3])}`
    : `<strong>✕ Not quite. Correct answer: ${String.fromCharCode(65+correctIndex)}. ${escapeHTML(q[1][correctIndex])}</strong>${escapeHTML(q[3])}`;
  document.getElementById("answeredHint").textContent=isCorrect?"Great work!":"Review the explanation and keep going.";
  const next=document.getElementById("submitAnswer");
  next.disabled=false;
  next.innerHTML=currentIndex===questions.length-1?'View results <span>→</span>':'Next question <span>→</span>';
}
function advanceQuestion(){
  if(!answered) return;
  if(currentIndex<questions.length-1){currentIndex++;renderQuestion();}
  else showResults();
}
function showResults(){
  quizView.classList.add("hidden");resultView.classList.remove("hidden");
  const percentage=Math.round((correctCount/questions.length)*100);
  document.getElementById("scoreValue").textContent=`${percentage}%`;
  document.getElementById("scoreRing").style.setProperty("--score",`${percentage}%`);
  document.getElementById("correctValue").textContent=correctCount;
  document.getElementById("wrongValue").textContent=wrongCount;
  document.getElementById("totalValue").textContent=questions.length;
  document.getElementById("resultTitle").textContent=percentage>=80?"Excellent work!":percentage>=50?"Good effort!":"Keep practising!";
  document.getElementById("resultMessage").textContent=percentage>=80?"You have built a strong result. Keep your momentum going.":percentage>=50?"You are making progress. Review the explanations and try again.":"Every attempt is a learning opportunity. Review the answers and give it another try.";
  document.getElementById("resultIcon").textContent=percentage>=80?"★":"✦";
  document.getElementById("progressBar").style.width="100%";
  window.scrollTo({top:0,behavior:"smooth"});
}
function goToCategories(){
  showMain();
  document.getElementById("categoriesView").scrollIntoView({behavior:"smooth"});
}
function scrollToSection(id){
  showMain();
  setTimeout(()=>document.getElementById(id).scrollIntoView({behavior:"smooth"}),50);
}

renderCategories();
document.getElementById("year").textContent=new Date().getFullYear();
categoryGrid.addEventListener("click",e=>{const btn=e.target.closest("[data-category]");if(btn)startQuiz(btn.dataset.category);});
document.getElementById("exploreBtn").addEventListener("click",()=>scrollToSection("categoriesView"));
document.getElementById("headerStart").addEventListener("click",()=>scrollToSection("categoriesView"));
document.getElementById("bottomStart").addEventListener("click",()=>scrollToSection("categoriesView"));
document.getElementById("howBtn").addEventListener("click",()=>scrollToSection("howView"));
document.getElementById("backToCategories").addEventListener("click",goToCategories);
document.getElementById("submitAnswer").addEventListener("click",()=>{if(answered) advanceQuestion(); else submitCurrentAnswer();});
document.getElementById("retryBtn").addEventListener("click",()=>startQuiz(activeCategory.id));
document.getElementById("resultHomeBtn").addEventListener("click",showMain);
document.getElementById("brandHome").addEventListener("click",e=>{e.preventDefault();showMain();});
document.querySelectorAll(".nav-link").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".nav-link").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  document.getElementById("mainNav")?.classList.remove("open");
  scrollToSection(btn.dataset.view==="home"?"homeView":btn.dataset.view==="categories"?"categoriesView":"howView");
}));
document.getElementById("optionsList").addEventListener("click",e=>{const btn=e.target.closest("[data-option]");if(btn)chooseOption(Number(btn.dataset.option));});
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".main-nav").classList.toggle("open"));
