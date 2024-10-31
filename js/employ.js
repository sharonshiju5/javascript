const employees = [
    { id: 1, name: "John Doe", position: "Software Engineer", department: "IT", salary: 75000, joiningDate: "2019-06-01" },
    { id: 2, name: "Jane Smith", position: "Product Manager", department: "Product", salary: 90000, joiningDate: "2020-02-15" },
    { id: 3, name: "Alice Brown", position: "HR Manager", department: "Human Resources", salary: 70000, joiningDate: "2018-11-01" },
    { id: 4, name: "Bob Johnson", position: "Marketing Specialist", department: "Marketing", salary: 65000, joiningDate: "2021-07-10" },
    { id: 5, name: "Tom Clark", position: "Sales Executive", department: "Sales", salary: 60000, joiningDate: "2022-01-05" },
    { id: 6, name: "Ella Young", position: "Business Analyst", department: "Finance", salary: 72000, joiningDate: "2021-03-12" },
    { id: 7, name: "Chris King", position: "DevOps Engineer", department: "IT", salary: 80000, joiningDate: "2019-10-22" },
    { id: 8, name: "Sarah White", position: "UX Designer", department: "Design", salary: 67000, joiningDate: "2020-11-30" },
    { id: 9, name: "Daniel Hill", position: "Quality Analyst", department: "Quality Assurance", salary: 63000, joiningDate: "2021-08-17" },
    { id: 10, name: "Megan Green", position: "Content Strategist", department: "Marketing", salary: 64000, joiningDate: "2022-05-21" },
    { id: 11, name: "Ryan Clark", position: "Operations Manager", department: "Operations", salary: 83000, joiningDate: "2019-04-19" },
    { id: 12, name: "Laura Scott", position: "Data Analyst", department: "Data Analytics", salary: 72000, joiningDate: "2020-09-10" },
    { id: 13, name: "Ethan Brown", position: "Technical Support", department: "Customer Service", salary: 55000, joiningDate: "2022-03-07" },
    { id: 14, name: "Sophie Black", position: "Finance Manager", department: "Finance", salary: 92000, joiningDate: "2018-10-05" },
    { id: 15, name: "Matthew Lee", position: "Account Manager", department: "Sales", salary: 67000, joiningDate: "2021-01-18" },
    { id: 16, name: "Lily Adams", position: "PR Specialist", department: "Marketing", salary: 66000, joiningDate: "2022-08-09" },
    { id: 17, name: "Nathan Perry", position: "Software Architect", department: "IT", salary: 105000, joiningDate: "2018-06-14" },
    { id: 18, name: "Grace Evans", position: "Customer Success Manager", department: "Customer Service", salary: 69000, joiningDate: "2020-12-05" },
    { id: 19, name: "Lucas Martin", position: "Network Engineer", department: "IT", salary: 78000, joiningDate: "2021-11-10" },
    { id: 20, name: "Hannah James", position: "HR Specialist", department: "Human Resources", salary: 71000, joiningDate: "2019-07-25" },
    { id: 21, name: "Andrew Stewart", position: "Sales Manager", department: "Sales", salary: 87000, joiningDate: "2020-04-30" },
    { id: 22, name: "Olivia Clark", position: "Graphic Designer", department: "Design", salary: 63000, joiningDate: "2022-02-28" },
    { id: 23, name: "James Baker", position: "Content Writer", department: "Marketing", salary: 54000, joiningDate: "2021-05-20" },
    { id: 24, name: "Amelia Young", position: "Finance Analyst", department: "Finance", salary: 71000, joiningDate: "2021-12-01" },
    { id: 25, name: "Jack Turner", position: "IT Support Specialist", department: "IT", salary: 60000, joiningDate: "2020-03-12" },
    { id: 26, name: "Mia Ross", position: "Operations Coordinator", department: "Operations", salary: 59000, joiningDate: "2019-08-15" },
    { id: 27, name: "Henry Brooks", position: "Database Administrator", department: "IT", salary: 83000, joiningDate: "2021-09-25" },
    { id: 28, name: "Samantha Hayes", position: "Product Designer", department: "Product", salary: 74000, joiningDate: "2022-04-15" },
    { id: 29, name: "Liam Wood", position: "Field Sales Representative", department: "Sales", salary: 55000, joiningDate: "2022-06-18" },
    { id: 30, name: "Sophia Hughes", position: "Data Engineer", department: "Data Analytics", salary: 91000, joiningDate: "2020-10-21" },
    { id: 31, name: "William Russell", position: "Compliance Officer", department: "Finance", salary: 72000, joiningDate: "2019-05-12" },
    { id: 32, name: "Emily Hall", position: "Digital Marketing Specialist", department: "Marketing", salary: 69000, joiningDate: "2021-03-29" },
    { id: 33, name: "Benjamin Rogers", position: "System Analyst", department: "IT", salary: 82000, joiningDate: "2020-07-11" },
    { id: 34, name: "Zoe Simmons", position: "Recruiter", department: "Human Resources", salary: 66000, joiningDate: "2021-11-20" },
    { id: 35, name: "Michael Evans", position: "Customer Service Rep", department: "Customer Service", salary: 52000, joiningDate: "2020-05-23" },
    { id: 36, name: "Abigail Collins", position: "SEO Specialist", department: "Marketing", salary: 67000, joiningDate: "2021-08-02" },
    { id: 37, name: "Mason Griffin", position: "Operations Analyst", department: "Operations", salary: 70000, joiningDate: "2022-03-05" },
    { id: 38, name: "Victoria Hill", position: "Account Executive", department: "Sales", salary: 68000, joiningDate: "2019-12-22" },
    { id: 39, name: "Samuel Gray", position: "Legal Advisor", department: "Legal", salary: 95000, joiningDate: "2021-09-15" },
    { id: 40, name: "Chloe Perry", position: "Technical Writer", department: "Product", salary: 62000, joiningDate: "2022-06-10" },
    { id: 41, name: "Evan Carter", position: "Training Specialist", department: "Human Resources", salary: 69000, joiningDate: "2018-05-27" },
    { id: 42, name: "Charlotte Barnes", position: "Project Manager", department: "Operations", salary: 87000, joiningDate: "2021-02-01" },
    { id: 43, name: "Dylan Phillips", position: "Solutions Architect", department: "IT", salary: 100000, joiningDate: "2019-09-20" },
    { id: 44, name: "Isabella Murray", position: "Accountant", department: "Finance", salary: 74000, joiningDate: "2020-08-25" },
    { id: 45, name: "Logan Morris", position: "Procurement Manager", department: "Operations", salary: 79000, joiningDate: "2022-11-01" },
    { id: 46, name: "Harper Edwards", position: "Public Relations Officer", department: "Marketing", salary: 72000, joiningDate: "2021-04-10" },
    { id: 47, name: "Caleb Bennett", position: "Legal Assistant", department: "Legal", salary: 58000, joiningDate: "2021-01-30" },
    { id: 48, name: "Zoey Cooper", position: "Market Research Analyst", department: "Marketing", salary: 67000, joiningDate: "2020-06-16" },
    { id: 49, name: "Oliver Bailey", position: "Cloud Engineer", department: "IT", salary: 94000, joiningDate: "2022-07-22" },
    { id: 50, name: "Emma Wilson", position: "Data Scientist", department: "Data Analytics", salary: 95000, joiningDate: "2023-08-12" },
    { id: 51, name: "Aaron Grant", position: "Operations Lead", department: "Operations", salary: 85000, joiningDate: "2019-03-15" },
    { id: 52, name: "Hailey Cooper", position: "Data Architect", department: "Data Analytics", salary: 98000, joiningDate: "2020-11-20" },
    { id: 53, name: "Eleanor Scott", position: "Financial Analyst", department: "Finance", salary: 76000, joiningDate: "2021-06-05" },
    { id: 54, name: "Brandon King", position: "Marketing Manager", department: "Marketing", salary: 92000, joiningDate: "2018-07-15" },
    { id: 55, name: "Olivia Reed", position: "Software Tester", department: "Quality Assurance", salary: 64000, joiningDate: "2022-02-28" },
    { id: 56, name: "Gabriel Hughes", position: "IT Consultant", department: "IT", salary: 89000, joiningDate: "2020-08-12" },
    { id: 57, name: "Jasmine Patel", position: "Web Developer", department: "IT", salary: 77000, joiningDate: "2021-04-23" },
    { id: 58, name: "Charlie West", position: "Account Executive", department: "Sales", salary: 68000, joiningDate: "2021-07-19" },
    { id: 59, name: "Lydia Hall", position: "Customer Service Manager", department: "Customer Service", salary: 72000, joiningDate: "2019-09-01" },
    { id: 60, name: "Aiden Young", position: "Design Engineer", department: "Design", salary: 82000, joiningDate: "2022-05-30" },
    { id: 61, name: "Sophia Evans", position: "Risk Analyst", department: "Finance", salary: 87000, joiningDate: "2018-12-10" },
    { id: 62, name: "Hunter Ross", position: "System Administrator", department: "IT", salary: 81000, joiningDate: "2021-10-14" },
    { id: 63, name: "Luna Lewis", position: "Creative Director", department: "Design", salary: 98000, joiningDate: "2020-03-12" },
    { id: 64, name: "Mason Stewart", position: "Junior Developer", department: "IT", salary: 65000, joiningDate: "2022-01-07" },
    { id: 65, name: "Harper White", position: "Project Assistant", department: "Operations", salary: 61000, joiningDate: "2020-09-05" },
    { id: 66, name: "Benjamin Foster", position: "Data Analyst", department: "Data Analytics", salary: 72000, joiningDate: "2019-08-28" },
    { id: 67, name: "Natalie Collins", position: "Product Marketing Specialist", department: "Product", salary: 73000, joiningDate: "2021-12-15" },
    { id: 68, name: "David Mitchell", position: "Logistics Coordinator", department: "Operations", salary: 67000, joiningDate: "2018-11-01" },
    { id: 69, name: "Ava Martinez", position: "Account Specialist", department: "Finance", salary: 69000, joiningDate: "2021-05-11" },
    { id: 70, name: "Maxwell Clark", position: "Social Media Manager", department: "Marketing", salary: 65000, joiningDate: "2022-04-25" },
    { id: 71, name: "Claire Adams", position: "Policy Analyst", department: "Legal", salary: 91000, joiningDate: "2019-12-02" },
    { id: 72, name: "Liam Watson", position: "UX/UI Designer", department: "Design", salary: 75000, joiningDate: "2021-07-22" },
    { id: 73, name: "Elena Morris", position: "Cybersecurity Analyst", department: "IT", salary: 92000, joiningDate: "2020-10-28" },
    { id: 74, name: "Nathan Parker", position: "IT Support Engineer", department: "IT", salary: 64000, joiningDate: "2022-06-18" },
    { id: 75, name: "Isabella Gray", position: "Legal Assistant", department: "Legal", salary: 60000, joiningDate: "2018-08-17" },
    { id: 76, name: "Thomas Green", position: "Procurement Specialist", department: "Operations", salary: 74000, joiningDate: "2020-02-20" },
    { id: 77, name: "Ella Brooks", position: "Business Development Rep", department: "Sales", salary: 72000, joiningDate: "2021-03-31" },
    { id: 78, name: "Owen Nelson", position: "Finance Assistant", department: "Finance", salary: 58000, joiningDate: "2022-01-20" },
    { id: 79, name: "Zoey Roberts", position: "Market Analyst", department: "Marketing", salary: 67000, joiningDate: "2019-05-10" },
    { id: 80, name: "Isaac Howard", position: "Full Stack Developer", department: "IT", salary: 87000, joiningDate: "2021-08-12" },
    { id: 81, name: "Savannah Young", position: "Senior HR Specialist", department: "Human Resources", salary: 81000, joiningDate: "2019-10-21" },
    { id: 82, name: "Julian Adams", position: "Operations Planner", department: "Operations", salary: 76000, joiningDate: "2020-09-17" },
    { id: 83, name: "Hazel Morris", position: "Public Relations Specialist", department: "Marketing", salary: 71000, joiningDate: "2021-04-29" },
    { id: 84, name: "Cameron Diaz", position: "Budget Analyst", department: "Finance", salary: 78000, joiningDate: "2022-07-14" },
    { id: 85, name: "Kennedy Lopez", position: "Recruitment Coordinator", department: "Human Resources", salary: 64000, joiningDate: "2020-05-05" },
    { id: 86, name: "Blake Brown", position: "Project Analyst", department: "Operations", salary: 72000, joiningDate: "2019-12-08" },
    { id: 87, name: "Madeline Kelly", position: "Technical Recruiter", department: "Human Resources", salary: 71000, joiningDate: "2021-02-20" },
    { id: 88, name: "Everett Reed", position: "Sales Specialist", department: "Sales", salary: 62000, joiningDate: "2020-08-26" },
    { id: 89, name: "Genesis Ross", position: "Legal Consultant", department: "Legal", salary: 95000, joiningDate: "2022-03-15" },
    { id: 90, name: "Violet Bailey", position: "Data Engineer", department: "Data Analytics", salary: 93000, joiningDate: "2019-07-18" },
    { id: 91, name: "Juliana James", position: "Creative Strategist", department: "Marketing", salary: 85000, joiningDate: "2021-06-06" },
    { id: 92, name: "Dylan Foster", position: "Front End Developer", department: "IT", salary: 68000, joiningDate: "2022-01-11" },
    { id: 93, name: "Riley Edwards", position: "Compliance Specialist", department: "Legal", salary: 79000, joiningDate: "2020-12-17" },
    { id: 94, name: "Addison Brown", position: "Customer Relations Rep", department: "Customer Service", salary: 55000, joiningDate: "2019-10-30" },
    { id: 95, name: "Colton Allen", position: "Marketing Coordinator", department: "Marketing", salary: 67000, joiningDate: "2021-09-03" },
    { id: 96, name: "Mackenzie Lewis", position: "Research Analyst", department: "Data Analytics", salary: 72000, joiningDate: "2022-06-23" },
    { id: 97, name: "Carlos Cruz", position: "Senior Account Manager", department: "Sales", salary: 85000, joiningDate: "2020-11-25" },
    { id: 98, name: "Valentina Cook", position: "Brand Strategist", department: "Marketing", salary: 83000, joiningDate: "2019-02-13" },
    { id: 99, name: "Antonio Torres", position: "Security Analyst", department: "IT", salary: 88000, joiningDate: "2021-07-28" },
    { id: 100, name: "Lillian Foster", position: "Assistant Accountant", department: "Finance", salary: 62000, joiningDate: "2022-03-20" }

  ];

  function getemp(){
    str=``
    employees.map((emp)=>{

    str+=`<tr>
                <th scope="row" id="emp">${emp.id}</th>
                <td>${emp.name}</td>
                <td>${emp.position}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>${emp.joiningDate}</td>
            </tr>`
    })
    document.getElementById("emp").innerHTML=str
    // console.log(str);
    

}
getemp()



document.getElementById("filter").addEventListener("keyup",(e)=>{
    // console.log(e.target.value);
    const filterdata=employees.filter((emp)=>{return emp.name.startsWith(e.target.value)})
    // console.log(filterdata);
    str=``
    filterdata.map((emp)=>{
        str+=`<tr>
                <th scope="row">${emp.id}</th>
                <td>${emp.name}</td>
                <td>${emp.position}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>${emp.joiningDate}</td>
            </tr>`
    })
    document.getElementById("emp").innerHTML=str
})