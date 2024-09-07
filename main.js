function calculate() {
    var num;
    var i;
    var arr = [];
    var srt = ""
    var ans = 0
    var p;
    //functions for all convsion
    //1
    function dec_to_bin(num) {
        return parseInt(num, 10).toString(2);
    }
    //2
    function dec_to_oct(num) {
        return parseInt(num, 10).toString(8);
    }
    //3
    function dec_to_hex(num) {
        return parseInt(num, 10).toString(16).toUpperCase();
    }
    //4
    function bin_to_dec(num) {
        return parseInt(num, 2).toString(10);
    }
    //5
    function bin_to_oct(num) {
        return parseInt(num, 2).toString(8);
    }
    //6
    function bin_to_hex(num) {
        return parseInt(num, 2).toString(16).toUpperCase();
    }
    //7
    function oct_to_dec(num) {
        return parseInt(num, 8).toString(10);
    }
    //8
    function oct_to_bin(num) {
        return parseInt(num, 8).toString(2);
    }
    //9
    function oct_to_hex(num) {
        return parseInt(num, 8).toString(16).toUpperCase();
    }
    //10
    function hex_to_dec(num) {
        p = num.length - 1;
        for (i = 0; i < num.length; i++) {
            if ('0' <= num[i] && num[i] <= '9') {
                ans += (num[i].charCodeAt(0) - 48) * (16 ** p)
                p = p - 1;
            }
            else {
                ans += (num[i].charCodeAt(0) - 55) * (16 ** p)
                p = p - 1;
            }
        }
        return ans;
    }
    //11
    function hex_to_bin(num) {
        ans = hex_to_dec(num);
        return parseInt(ans, 10).toString(2);
    }
    //12
    function hex_to_oct(num) {
        ans = hex_to_dec(num);
        return parseInt(ans, 10).toString(8);
    }

    ////get input
    var from = parseInt(document.getElementById("convert_from").value);
    var to = parseInt(document.getElementById("convert_to").value);
    var inpt = document.getElementById("ipt").value;
    //1
    if (from == 1 && to == 2) {
        document.getElementById("opt").innerText = dec_to_bin(inpt);
    }
    //2
    if (from == 1 && to == 3) {
        document.getElementById("opt").innerText = dec_to_oct(inpt);
    }
    //3
    if (from == 1 && to == 4) {
        document.getElementById("opt").innerText = dec_to_hex(inpt);
    }
    //4
    if (from == 2 && to == 1) {
        document.getElementById("opt").innerText = bin_to_dec(inpt);
    }
    //5
    if (from == 2 && to == 3) {
        document.getElementById("opt").innerText = bin_to_oct(inpt);
    }
    //6
    if (from == 2 && to == 4) {
        document.getElementById("opt").innerText = bin_to_hex(inpt);
    }
    //7
    if (from == 3 && to == 1) {
        document.getElementById("opt").innerText = oct_to_dec(inpt);
    }
    //8
    if (from == 3 && to == 2) {
        document.getElementById("opt").innerText = oct_to_bin(inpt);
    }
    //9
    if (from == 3 && to == 4) {
        document.getElementById("opt").innerText = oct_to_hex(inpt);
    }
    //10
    if (from == 4 && to == 1) {
        document.getElementById("opt").innerText = hex_to_dec(inpt);
    }
    //11
    if (from == 4 && to == 2) {
        document.getElementById("opt").innerText = hex_to_bin(inpt);
    }
    //12
    if (from == 4 && to == 3) {
        document.getElementById("opt").innerText = hex_to_oct(inpt);
    }
}
