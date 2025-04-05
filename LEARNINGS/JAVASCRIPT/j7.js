let employeeDetails = [
    "EMP-1002",                        
    "Amit Kumar",                      
    32,                                
    true,                              
    "amit.kumar@techcorp.com",         

    // Job Details
    {
        title: "Lead Software Engineer",
        department: "Product Development",
        startDate: "2019-03-10"
    },                                 
    95000.75,                         
    12.5,                            

    ["Python", "Django", "Docker", "Kubernetes"],  
    [
        { name: "PMP Certification", year: 2021 },
        { name: "Python Developer", year: 2020 }
    ],                              
    false,                             
    null,                              
    "Hybrid",                          

    4.8,                              
    15,                              
    {
        id: "PRJ-305",
        name: "Cloud Migration",
        status: "In Progress",
        team: ["EMP-1003", "EMP-1004"]
    },                                 

    // Address
    {
        street: "45 Tech Park Road",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pinCode: "411001"
    },                                 

   
    true,                              
    300.25,                   
    ["Health Insurance", "Gym Membership", "Transport Allowance"], // Array: Benefits

    {
        name: "Neha Kumar",
        relation: "Spouse",
        phone: "+91-9988776655"
    },                               

    
    function(salary, bonusPercentage, monthlyDeduction) {
        const bonus = (salary * bonusPercentage) / 100;
        return salary + bonus - (monthlyDeduction * 12);
    },             

    null                    
];

console.log(employeeDetails);
console.log("\n");
console.log(employeeDetails.push("abc"));
console.log(employeeDetails);
console.log(employeeDetails.pop());
console.log(employeeDetails);
console.log(employeeDetails.unshift("abc"));
console.log(employeeDetails);

