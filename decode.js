function  decodeText() {
    let myDiv = document.getElementById("decodedDiv");
    myDiv.style.display === "none";
    let req = document.getElementById("mytext").value;
    let res = "";
    for (i=0; i<req.length;i++) {
    
        switch (req[i]) {
            case "b":
                res = res.concat("a");
                break
            case "d":
                res = res.concat("b");
                break
            case "f":
                res = res.concat("c");
                break
            case "h":
                res = res.concat("d");
                break
            case "j":
                res = res.concat("e");
                break
            case "l":
                res = res.concat("f");
                break
            case "n":
                res = res.concat("g");
                break
            case "p":
                res = res.concat("h");
                break
            case "r":
                res = res.concat("i");
                break
            case "t":
                res = res.concat("j");
                break
            case "v":
                res = res.concat("k");
                break
            case "x":
                res = res.concat("l");
                break
            case "z":
                res = res.concat("m");
                break
            case "y":
                res = res.concat("n");
                break
            case "w":
                res = res.concat("o");
                break
            case "u":
                res = res.concat("p");
                break
            case "s":
                res = res.concat("q");
                break
            case "q":
                res = res.concat("r");
                break
            case "o":
                res = res.concat("s");
                break
            case "m":
                res = res.concat("t");
                break
            case "k":
                res = res.concat("u");
                break
            case "i":
                res = res.concat("v");
                break
            case "g":
                res = res.concat("w");
                break
            case "e":
                res = res.concat("x");
                break
            case "c":
                res = res.concat("y");
                break
            case "a":
                res = res.concat("z");
                break
            case "1":
                res = res.concat(0);
                break
            case "3":
                res = res.concat(1);
                break
            case "5":
                res = res.concat(2);
                break
            case "7":
                res = res.concat(3);
                break
            case "9":
                res = res.concat(4);
                break
            case "8":
                res = res.concat(5);
                break
            case "6":
                res = res.concat(6);
                break
            case "4":
                res = res.concat(7);
                break
            case "2":
                res = res.concat(8);
                break
            case "0":
                res = res.concat(9);
                break

        }

}
myDiv.style.display = "block";
myDiv.innerHTML=res;
}
