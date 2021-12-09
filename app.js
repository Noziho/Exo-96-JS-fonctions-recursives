function recursive (a) {
    let div = document.createElement("div");
    div.innerHTML = a;
    document.body.append(div);

}

for (let i = 0; i < 10; i+=2) {
    recursive(i);
}

