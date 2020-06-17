# Pig Dice

#### A game of rolling a dice to win, Created on 06/17/2020

#### By Mook Dang and Tristan Emmerson

## Description
Pig Dice is a dice game when 2 or more people take turn rolling a dice, the game can keep going umtil if the person who taken turn roll a one then it reset the score. Player will keep going until someone first score 100. 

### Specs
| Spec 	| Input 	| Output 	|
|-	|-	|-	|
| test roll against "1 rule" 	| ROLL A: 6 ROLL B: 5 	| option: keep/roll again 	|
| test roll against "1 rule" 	| ROLL A: 6 ROLL B: 1 	| Turn over/0 Total for round 	|
| add consecutive round totals to a running total when "kept" 	| current total:15 /ROLL-A:5 ROLL-B:5 	| current total:25 	|
| pass turn to other player when "kept" or "0'ed" 	| player 1: active "Keep" selected after roll 	| player 2: active 	|
| test running total against target (100) 	| total 105 	| win 	|
| test running total against target (100) 	| total 95 	| game continues 	|

## Setup/Installation Requirements

1. Open the VS Code and Web site to the game board 
2. Choose how many people are playing
3. Player 1 start to roll the dice and goes on

## Known Bugs
No known bugs

## Support and contact details
For contact Mook Dang and Tristan Emmerson

## Technologies Used
We used HTML, CSS, JavaScript and Jquery. We mainly focus on JavaScript. 

### License
Copyright (c) 2016 Mook Dang and Tristan Emmerson

This software is licensed under MIT license.

