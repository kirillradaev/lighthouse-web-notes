# Kirill's Notes

## Summary

This repository contains all of the notes takem by [Kirill Radaev](https://github.com/kirillradaev) for the Lighthouse Labs Web Development Bootcamp.

### Table of Contents 

* [Week 1](/Week_1)
  * [Day 1](/Week_1/Day_1)

  # Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kradaev/lotide`

**Require it:**

`const _ = require('@kradaev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the head of an array
* `tail`: returns everything except the first elemnt from an array
* `middle`: returns everything between the first ad last index in an array
* `eqArrays`: compares two arrays
* `assertEqual`: prints out the reluts if true or false
* `assertArraysEqual`: logs true or false if arrays are equal
* `assertObjectsEqual`: logs true or false if arrays are equal
* `eqObjects`: checks if two objects are equal
* `findKey`: finds key in an object
* `findKeyByValue`: finds key by its value in an object
* `flatten`: takes nested arrays and groups them into one array
* `countOnly`: counts and returns only specific keys
* `letterPosition`: returns the positon of a letter
* `map`:returns only specific indecies 
* `takeUntil`: returns obly objects in an array that are before specific object
* `without`: checks two arrays and removes identical objects in both arrays

