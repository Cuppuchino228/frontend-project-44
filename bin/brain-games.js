#!/usr/bin/env node
import getName from "../scr/cli.js"

export default function app () {
    console.log("Welcome to the Brain Games!")

    getName()
}

app()