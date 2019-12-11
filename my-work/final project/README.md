<h1>Final project: Women, Business and Law</h1>

<ul>
<li><b>Describe what have you created?</b></li>
I chose to build a website that visualizes the WBL Index compiled each year by the World Bank. The WBL Index stands for Women, Business and Law index, and it specifically measures how the law treats women around the world. The index is calculated by asking yes/no questions in 8 categories, a 'yes' gives 100pts, and a 'no' gives 0pts. The resulting index is the average score from a total of 35 questions.

On my website I have chosen to visualize the overall change in how the law treats women around the world in the last 10 years. My visualizations include:
<ol>
<li>a graph showing the <b>wbl index</b> of all the countries of the world, filtering them by their relative income group (low-income, middle-income, high-income) and the year (2009-2018),</li>
![](screenshot1.jpg)
<!-- ![](screenshot1.jpg) -->
<li>a graph showing the <b>wbl index</b> of all the countries in the world in 2018, but letting the user filter them by region (South Asia, Europe and Central Asia, Middle East and North Africa, sub-saharan Africa, Latin America and Caribbean, High Income OECD, East Asia and Pacific)</li>
<img src="screenshot2.jpg">
<li>on separate pages, all the countries of the world are displayed by the 8 different categories (going places, starting a job, getting paid, getting married, having children, running a business, managing assets, getting a pension) and letting the user filter through the years</li>
<img src="screenshot3.jpg">
</ol>
<li><b>How does it work?</li></b>
The website is based on a scrolling mechanism, leading the user through the story, hopefully, explaining the importance and implications of what this index depicts.
The data includes 10 years worth of WBL indexes for each country, the results for each category, the yes/no answers for each country, the income level of the country, and the region.
Then, each country is assigned a circle, which then is moved around the graph according to the filter applied to it. In order to make it more visually appealing and more easily perceivable, the y-coordinate of each circle is controlled by different force functions.
<li><b>How is it intended to be engaged with? What do you hope for a viewer to take away from it?</b></li>
I am hoping to tell a story to the user. It is important to understand, that, while we are aware that women face multiple difficulties in the job market, there are only 6 countries in the world where the <b>law</b> sees women as equals to men. Sometimes we forget how bad some places are for women and how far we still have to go to achieve true gender equality. However, it is also intended to show that we are moving in the right direction, and the world is, in general, becoming a better place.
<li><b>Which aspect of it are you most proud about, and why?</b></li>
I am incredibly proud of how smoothly the force graphs work. Also, I am very happy the scrolling works so well and doesn't temper with the graphs. I am really proud of these two features because they took me incredibly long to figure out AND they are central to the user experience of the website.
<li><b>Which part would you improve if you had more time?</b></li>
One thing I would have really liked to add would be the ability for the user to input a country's name, which would then emphasize the country's data point so that it is easier to spot its development within the world's general trend.
<li><b>What did your process look like? Outline a rough timeline: when did you settle in on a dataset, how extensive was your contextual research and when did you start building the actual page?</b></li>
A lot of debugging. So much debugging.
First, I was already struggling with picking my data set. I was interested in so many topics, yet, at the same time, did not find any dataset that would be detailed enough to work with and interesting enough to dedicate 2 months of hard work to.
After going through many, many datasets, I finally settled on this dataset published by the World Bank. Then I read the full report, did some research on the committee and the general economic implications that different laws have on women's lives around the world.
When it came to coding, I started with figuring out which parts exactly I wanted to illustrate, since the dataset includes so much information.
When most of my page was done, I had to restructure my dataset in order to assign each country a single 'circle', which would move along the years.
When the graph visualizations were done, I had to fix the scrolling mechanism (the appearing and disappearing of appropriate items) and find a way to tell the whole story through supplementing visuals.
<li><b>During your process, what compromises did you make with regards to your dream outcome of this project?</b></li>
My initial sketch for this data project was way too ambitious. However, I am really happy with the outcome. One thing I really would have wanted to add (which I also think would be a great experience for the user) would be the ability to input a specific country and then follow its development throughout the decade.

</ul>
