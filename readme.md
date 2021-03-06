# Puchar Województwa Śląskiego w Marszach na Orientację - info page

---

Simple static website with information about Recreational Orienteering Silesian Voivodeship Trophy. Page presents results, event calendar, current event details and general information about the trophy.

LIVE: [Puchar Województwa Śląskiego w MnO](http://www.pucharino.slask.pl/)

![page preview](/src/assets/img/pws_screen.gif)

## Technologies used

- HTML5
- CSS3 (SCSS)
- JavaScript

## More about the project

### Goal

I wanted to create **responsive** one page website with **clear structure** and easly **findable information**.

### Main objectives

- build proper **semantic structure**
- make website **fully responsive**
- use **mobie first** design

### Challenges

The biggest challenge I conquered was to **build a responsive table** presenting the calendar of events for current year. The main problem was to present **dwo dimensional data** on narrow **mobile screen**.

In the table each record contains all the details about an event - name, date, location, organiser and so on. In mobile version I decided to group all the details of each event and present them in kind of an **accordion form**, preserving the HTML table structure. Table headers in each accordion field are provided in CSS as `::before` element to avoid multiplying content and accessibility issues.

![table preview](/src/assets/img/table_preview.png)

## Credits

Project was build with [WTF Webpack Starter Kit](https://github.com/maciejkorsan/wtf-webpack-starter) by Maciej Korsan.

Graphic design and all the icons and photographs made by myself.
