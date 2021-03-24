# Apps Script Automation

Most of boring and tedious work can be automated using code. I decided to spend some time to go through the Google Apps Script tutorials (https://developers.google.com/apps-script/articles/tutorials).

## 1. Creating Google Documents

Creates a Google Doc and sends an email to the current user with a link to the doc.

## 2. Custom Function for Spreadsheets

1. Do simple calculations (e.g. doubling all the values in an array)
2. Retrieving content from the web (Retrieving blog post content)

## 3. Sending Emails

Sends emails with data from the current spreadsheet. Good for sending scheduled reports using some data pipelines created in Python, etc. Somehow, this does not work for non-Gmail addresses.

## 4. Removing Duplicate Rows in Spreadsheets

Something very common we do at work. Can be modified to check for different variations (e.g. if 2 cells are the same, it can be considered a duplicate value).

## 5. Handling Files in Google Drive

1. Logs file names of all files in Google Drive
2. Clear all untitled files that are at least 1 week old
3. Find all files with certain keywords

## 6. Generating Google Slides From Images

Creates a slide deck using 1 image per slide. Not very useful for work for now.

## 7. Retrieving Stock Prices From Yahoo Finance

Since I've started investing in stocks, I want to be able to retrieve and display historical stock prices using an API for the tickers that I'm interested in. Self-sourced project. Credits to https://investmentmoats.com/uncategorized/solution-to-yahoo-finance-data-not-refreshing-in-google-spreadsheet/ for providing some code.

