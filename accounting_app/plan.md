# accounting_app

A simple application to help people who are bad at tracking finances; 
Ideal for smaller businesses, side-hustles and vendors.
Not a Point Of Sale app. 
For tracking sales of items and services where the user has money from numerous resources (cash, square, check, etc). Not for tax calculations (yet). 
Just raw numbers for people who need to track their sales for easy reporting of 
income for next year's tax season.

1. User logs in. 
2. Select which save file you'd like to work with
3. Main screen: 
    1. Calendar that takes you to each day's sales by click
        1. Will take several input fields and some extra routing
        2. Requires use of a database
    2. The place where you input your sale/s 
        1. Needs a date field,
        2. Needs a time field (IMPORTANT FOR IF YOU'RE VENDING AT NIGHT (midnight switchover))
        3. Items field (jewelry, burnables, etc.)
        4. Service field (Reiki, readings, classes, etc.)
        5. Number field
    3. The place that tells you how much money was grossed (net calculations to come later)
4. Functions: 
    1. Adding inputs together
    2. Tracking time if user is vending around midnight to get EXACT dates for better 
        accuracy in tracking funds
    3. Taking daily net profits and automatically storing them in memory of the app and in the database at midnight or on user's command
5. Database:
    1. MongoDB 
