Please cover the functionality of https://todolist.james.am/ with test cases.

1. Identify the functionalities of https://todolist.james.am/
2. Write up Test cases to cover all functionality.

An example would be this

# Test Case Template

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

TS.1. To do list page

TC.1.1. elements are visible
(first TC always must be positive)  
* 1. Open the page
* 2. Observe heder - expected 'To Do List'
* 3. Observe footer - expected 'Double-click to edit a todo'
* 4. Observe task input field - expected visible
* 5. Observe task input placeholder - (What need's to be done?)


Expected result: as described   
Actual result: footer, misspelling in 'Double-click to edit a toodo'    
Status:  FAIL

TS.2  Create task

TC.2.1. Adding new task
* 1. Open application
* 2. Input task name ('reed the book')
* 3. Press 'Enter'
  

Expected result:   new item in the list 'reed the book' 
Actual result:  
Status: PASS

TC.2.2. Adding empty task
* 1.  Open application
* 2. Input task empty
* 3. Press Enter
  

Expected result:   empty item should't appear in the list 
Actual result:  
Status: PASS 

TC.2.3. Adding task with space
* 1.  Open application
* 2. Input task name (add some space without text)
* 3. Press Enter
  

Expected result:   item should't appear in the list     
Actual result:  
Status: PASS 



TS.3 Edit task

TC.3.1. Editing existing item
* 1. Double click on the item 
* 2. Change the text
* 3. Press Enter
  
Expected result: the item text should update to the new value in the list.  
Actual result:  
Status: PASS / FAIL

TS.4 Delete task

TC.1.6. Removing items
* 1. Click on item line
* 2. Click on 'x' to remove this eventually

  
Expected result: the item should disappear from list    
Actual result:  
Status: PASS / FAIL

TC.1.7. Marking item as completed
* 1. Click to mark an item and  

  
Expected result: the item should be checked as completed    
Actual result:  
Status: PASS / FAIL

TC.1.8. Marking all items as completed
* 1. Write a few tasks in list
* 2. Click on arrow which is in input field

  
Expected result: the all item should be checked as completed    
Actual result:  
Status: PASS / FAIL

TC.1.9. Un marking all items in list

* 1.  Write a few tasks in list and mark all of them as completed
* 2. Click on arrow which is in input field

  
Expected result: the all items in list should be unchecked  
Actual result:  
Status: PASS / FAIL

TC.1.10. Filter items as 'Active'
* 1.  Write a few tasks in list and mark few of them as completed and few as left to do
* 2. Click on btn 'Active'

  
Expected result: in the list should show just all left to do items
Actual result:  
Status: PASS / FAIL


TC.1.11. Filter items as 'Completed'
* 1.  Write a few tasks in list and mark few of them as completed and few as left to do
* 2. Click on btn 'Completed'

  
Expected result: in the list should show just all completed items
Actual result:  
Status: PASS / FAIL

TC.1.12. Filter items as 'All'
* 1.  Write a few tasks in list and mark few of them as completed and few as left to do
* 2. Click on btn 'All'

  
Expected result: in the list should show all completed and left to do items     
Actual result:  
Status: PASS / FAIL

TC.1.13. 'Clear' all list with left items do
* 1.  Write a few tasks in list 
* 2. Click on btn 'Clear'

  
Expected result: all written tasks should be in the list    
Actual result:  
Status: PASS / FAIL

TC.1.14. 'Clear'  list with left items do and checked as completed
* 1.  Write a few tasks in list few of them mark as completed
* 2. Click on btn 'Clear'

  
Expected result: Checked as completed should disappear and all written tasks should be in the list  
Actual result:  
Status: PASS / FAIL

TC.1.15. 'Clear' all list with completed items
* 1.  Write a few tasks in list and all of them mark as completed
* 2. Click on btn 'Clear'

  
Expected result: list should be empty   
Actual result:  
Status: PASS / FAIL


TC.1.16. Responsiveness
* 1.  Open the web page on various screen sizes (desktop, mobile, tablet)
* 2. Observe the lay out and functionality

  
Expected result: The layout should adjust appropriately to the screen size without losing functionality     
Actual result:  
Status: PASS / FAIL


```------------------`` 

