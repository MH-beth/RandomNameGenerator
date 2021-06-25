import React from "react";

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
    (request.status === 200) ?
    resolves(JSON.parse(request.response).results) :
    rejects(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
   });

   const gen = () =>{
    getFakeMembers(1).then(
        members => document.getElementById("container").textContent = `Name : ${members[0].name.first}
        \n${members[0].location.country}`,
        err => console.error(
        new Error("cannot load members from randomuser.me"))
       )
       
}

export {getFakeMembers , gen};