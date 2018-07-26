Finametrix Project

The following is the challenge posed by Finametrix for its resolution by the Bootcamp carried out by Geekshub and sponsored by Finametrix.


## Description of the problem

The Investment Funds Manager "Finafunds Value" wants to publish the profitability of its investment funds on its public website. Its public website is developed in Wordpress and the company that handles the web does not have the financial knowledge to calculate that data and be able to show it, therefore, "Finafunds Value" instructs Finametrix to develop a web service that allows calculating the profitability of a fund in a given period of time.

In order for Finametrix to have updated information, "Finafunds Value" will provide a daily file in CSV format with the information of the funds and the historical prices.
Given the criticality of the data to be shown to investors, it is important that the data loading process reports its completion of the load result indicating at least processed records and errors found.


## Specification of the file

The file has two possible types of records: VA and VL.
The VA records represent the registers with information of the investment funds, and their specification is the following:

| Field | Description |
| ------ | ------ |
| Record type | VA |
| ISIN | ISIN identifier of the fund (only by fund) |
| Name | Name of the investment fund |
| Currency | Currency of denomination of the instrument |
| Family | Family of the investment fund |


The VL records represent the records with price information, and their specification is as follows:

| Field | Description |
| ------ | ------ |
| Record type | VL |
| ISIN | ISIN identifier of the fund (only by fund) |
| Date | Price date in YYYYMMDD format |
| Price | Price of the instrument |


## Web service profitability calculation
The web service to be developed is a GET to the URL
`` `/ api / performance? isin = & dateFrom = & dateTo =` `` and the result is an object with two properties:

* performance: product profitability in the period
* volatility: volatility of the product in the period

The parameters to pass through URL are:
* isin: background ISIN identifier
* dateFrom: date from in YYYYMMDD format
* dateTo: date up to YYYYMMDD format


## Profitability calculation
The calculation of profitability of a product is calculated as the difference between the price at the end date minus the price at the start date divided by the start date:
`` `(priceFin - priceHome) / priceHome```


## Volatility calculation

The calculation of volatility of a product is calculated as the standard deviation of prices in the period.


Let's understand this formula.

To calculate volatility:
* The first thing we have to do is calculate the average of the prices (r in the formula)
* With the average of the prices, we calculate the variance for each day. The variance is calculated as the square of the difference between the price and the average.
* The total variance would be the sum of the variances between the number of days (samples) - 1.
* The standard deviation (volatility) and we could calculate it: it is the square root of the variance.

Let's imagine this series of prices for 5 days:
1
2
3
4
5

The mean would be: (1 + 2 + 3 + 4 + 5) / 5 = 3

The variance of each day would be:
(1 - 3) ^ 2 = 4
(2 - 3) ^ 2 = 1
(3 - 3) ^ 2 = 0
(4 - 3) ^ 2 = 1
(5 - 3) ^ 2 = 4

The total variance would be: (4 + 1 + 0 + 1 + 4) / 4 = 2,5

The standard deviation (volatility) would be the square root of 2.5 = 1.581138




With multer you can upload file and large file also,
Express-hbs, bower jquery
Crete an upload form to upload file in .csv
Crete a loading bar
The save file will be saved in mongo
Generate a url file should have a get post
Create a api.js in route
Look for plugins to read CSV
Modules to read files fs
 

