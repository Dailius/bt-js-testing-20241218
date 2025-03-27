
# Homework requirements
Please cover the functionality of https://todolist.james.am/ with test cases.

1. Identify the functionalities of https://todolist.james.am/
2. Write up Test cases to cover all functionality.

An example would be this

### Test Case Template

Test Case ID: [Unique identifier]
Title: [Short, descriptive name]

Preconditions:
1. [List of setup steps or requirements before testing]

Steps to Execute:
1. [Step-by-step instructions for performing the test]
2. [Next step, if any]

Expected Result:
[Describe the expected outcome]

Actual Result: 
[Leave blank for tester to fill in during execution]

Status:
[Pass/Fail/Blocked]

-------------------------------
[TC ID] - [TC name]:
[TC steps]

Expected:  
Actual: 

Status: PASS / FAIL

-----------------------------------

# Test cases

## TS.1. To do list page

### TC.1.1. elements are visible
(first TC always must be positive)  
* 1. Open the page
* 2. Observe heder - expected 'To Do List'
* 3. Observe footer - expected 'Double-click to edit a todo'
* 4. Observe task input field - expected visible
* 5. Observe task input placeholder - (What need's to be done?)

***Expected result:*** as described  
***Actual result:*** footer, misspelling in 'Double-click to edit a toodo'  
***Status:*** FAIL

## TS.2  Create task

### TC.2.1. Adding new task
* 1. Open application
* 2. Input task name ('reed the book')
* 3. Press 'Enter'

***Expected result:*** new item in the list 'reed the book' 
***Actual result:***  
***Status:*** PASS

### TC.2.2. Adding empty task
* 1.  Open application
* 2. Input task empty
* 3. Press Enter
  
***Expected result:*** empty item should't appear in the list 
***Actual result:***  
***Status:*** PASS

### TC.2.3. Adding task with space
* 1.  Open application
* 2. Input task name (add some space without text)
* 3. Press Enter
  
***Expected result:*** item should't appear in the list     
***Actual result:***  
***Status:*** PASS



## TS.3 Edit task

### TC.3.1. Editing existing item
* 1. Double click on the item 
* 2. Change the text
* 3. Press Enter
  
***Expected result:*** the item text should update to the new value in the list.  
***Actual result:***  
***Status:*** PASS

## TS.4 Delete task

### TC.4.1. Delete one task
* 1. Open application
* 2. Create few tasks
* 3. Move mouse on task in the list
* 4. Click on 'x' to remove this eventually
 
***Expected result:***  the item should disappear from list    
***Actual result:***  
***Status:*** PASS

### TC.4.2. Delete all completed tasks
* 1. Open application
* 2. Create few tasks
* 2. Mark few tasks as completed
* 2. Click on btn 'Clear'
  
***Expected result:*** all completed tasks should disappear    
***Actual result:***  
***Status:*** PASS

## TS.5 Completing task

### TC.5.1. Marking item as completed
* 1. Open application
* 2. Create few tasks
* 3. Click on check box to mark an task as completed 

***Expected result:***  the item should be checked as completed with strikethrough task name   
***Actual result:***  
***Status:*** PASS

### TC.5.2. Marking all items as completed
* 1. Open application
* 2. Create few tasks
* 3. Click on parent checkbox in input field
  
***Expected result:*** the all tasks should be checked as completed    
***Actual result:***  
***Status:*** PASS

### TC.5.3. Un marking all items in list
* 1. Open application
* 2. Create few tasks
* 3. Click one time on parent checkbox of input field (all tasks checked)
* 4. Click one time on parent checkbox of input field
  
***Expected result:*** the all items in list should be unchecked  
***Actual result:***  require two clicks in order to uncheck all tasks
***Status:*** FAIL

## TS.6 Filtering

### TC.6.1. Filter 'Active' tasks
* 1.  Write a few tasks in list and mark few of them as completed and few as left to do
* 2. Click on btn 'Active'
 
***Expected result:*** in the list should show just all left to do items
***Actual result:***  
***Status:*** PASS

### TC.6.2. Filter 'Completed' tasks
* 1.  Write a few tasks in list and mark few of them as completed and few as left to do
* 2. Click on btn 'Completed'

***Expected result:*** in the list should show just all completed items
***Actual result:***  
***Status:*** PASS

### TC.6.3. Filter 'All' tasks
* 1.  Write a few tasks in list and mark few of them as completed and few as left to do
* 2. Click on btn 'All'
  
***Expected result:*** in the list should show all completed and left to do items     
***Actual result:***  
***Status:*** PASS


