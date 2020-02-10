#  The Negotiator

![image](https://user-images.githubusercontent.com/40472408/74196119-9461db80-4c2a-11ea-95b5-b31b7f0c6dc7.png)


## :computer: Developers

* :woman_mechanic: Chelsea Jackson- Front End
* :woman_office_worker: Devon Martens- Front End
* :woman_office_worker: Michal Terranova- Back End
*  :man_teacher:Kyle Daniels- Back End

⭐️ Star us on GitHub — it helps!

[The Negotiator](https://thenegotiator.herokuapp.com/member).  will act as a broker for car dealers and agents. The app will prompt car dealers to provide information for insurance  providers. The information given will allow insurance providers to contact car dealers and provide them with a quote based  on the plan they request. In return car dealers will be offered competitive prices for their insurance. 


![image](https://user-images.githubusercontent.com/40472408/70688760-7d315c80-1c80-11ea-819f-c37ac597ac52.png) 

## Table of Contents

- [Functionality](#Functionality)
    - [Registration/Login](#typo3-extension-repository)
    
      - The user will register and login to the website with a email and password.The Passport package will allow users to log in with username and password, or other third party verifications such as Google. The password hashing middleware which we use to compliment Passport’s functionality is the Bcrypt package. This tool allows us to save the user in the database to later compare with the password used when generating their authentication token. Bcrypt adds 'salt' onto this concept by adding extra random characters onto the password that gets hashed. So the resulting hash is always different for the same input password. This prevents people from building a dictionary of hashes that corespond to the password that made them.
      
    - [Profile Page](#typo3-extension-repository)
      - Users will complete a form with their business information. Dealers will complete an application that will post to the common page. The dealers data will post to the common page on a card that the agents can view. The routes will allow both agents and dealers to view the common page. Agents can contact the dealers that post their information from the application form.   
      
    - [Quotes](#typo3-extension-repository)
    - An additional functionality will be added to this app that will allow the dealers to generate a quote based on the data that was populated in the application. The quote data will be generated from the data populated in the application. 
      
    
    
    
- [Packages](#Packages)
    - [Node.js](#typo3-extension-repository)
      - Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a      browser.
    - [Sequelize](#typo3-extension-repository)
      - Sequelize is a promise-based ORM for Node.js. It has dozens of cool features like synchronization, association, and validation. It also has support for PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL.
     
    - [Bcrypt](#typo3-extension-repository)
      - Bcrypt is a password hashing function. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.
    - [Passport](#typo3-extension-repository)
      - Passport is authentication middleware for Node. js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
    
    ![image](https://user-images.githubusercontent.com/40472408/70691211-86bdc300-1c86-11ea-8254-867dfea07491.png)
    
 - [Database](#Packages)
    - [MySQL workbench](#typo3-extension-repository)
      - MySQL Workbench is a visual database design tool that integrates SQL development, administration, database design, creation and maintenance into a single integrated development environment for the MySQL database system.
      
      ![image](https://user-images.githubusercontent.com/40472408/70741186-bd2c2a00-1ce8-11ea-8ea3-c2aece44f7a2.png)
