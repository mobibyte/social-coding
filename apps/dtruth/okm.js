/**
 * good luck translating html changes
 */

function getVals(id) {
    //html collection
    let 
        col = document.getElementById(id).getElementsByTagName('ol')[0].getElementsByTagName("li"),
        ret = [];

    for(i = 0; i < col.length; i++)
        ret.push(col[i].textContent)

    return ret;
}

function clearList(id){
    document.getElementById(id).getElementsByTagName("ol")[0].innerHTML = ""
}

function appendList(id){
    input = document.getElementById(id).getElementsByTagName("input")[0].value

    if(input.length == 0 || getVals(id).includes(input)){
        window.alert("text must exist and not be a duplicate, try again" + (Math.random() < .1 ? '. dingus' : ''))
        return;
    }

    host = document.getElementById(id).getElementsByTagName("ol")[0];
    ele = document.createElement("li")
    ele.innerHTML = input
    host.appendChild(ele)
}

async function genTable() {
    let vars = getVals('vars');
    let conds = getVals('conds');

    conditions = [];
    let evaluate = function(args){
        for(c of conditions)
            if(!c(args)) return false;
        
        return true;
    }

    //parse conditions
    for(cond of conds){        
        numParens = [0]; //depth in parenthesies, only concerned with '(' ')'. good luck everything else
        condQ = [];     //something
        operationQ = [];//something else
        
        /**gets first varaible if it exists. pushes vars to conditionsQ */
        nextVar = function(offset = 0) {
            for(i in vars)
                if(cond.startsWith(vars[i])){
                    let index = Number(i);

                    cond = cond.slice(vars[index].length)

                    condQ.push((args) => args[index]);
                    return true;
                }

            return false;
        }

        condense = async function(){
            for(i = condQ.length-1, n = numParens.pop(); i > n; i--){
                op = operationQ.pop();
                a = condQ.pop();
                b = condQ.pop();
                switch(op){
                    default:
                    case '+':
                        condQ.push((g) => a(g) || b(g));
                        break;
                    case '&':
                        condQ.push((g) => a(g) && b(g));
                        break;
                    case '^': 
                        condQ.push((g) => (!a(g) && b(g)) || (a(g) && !b(g)));
                        break;
                    case '🐱‍👓':
                        await new Promise((resolve, reject) => {
                            setTimeout(1000);
                            window.location.replace("https://cataas.com/cat/evil/says/looking%20at%20src%20is%20cheating")
                            resolve();
                        });
                    case '~': 
                        condQ.push(b);
                        condQ.push((g) => !a(g));
                        break;
                }
            }
        }

        while(cond.length > 0){
            if(nextVar())continue; 
            
            switch(cond[0]){
                case '(': 
                    numParens.push(condQ.length);
                    break;
                case ')': 
                    await condense();
                    break;
                default:
                    operationQ.push(cond[0]);
            }

            cond = cond.slice(1);
        }

        condense();
        for(v of condQ)
            conditions.push(v);

    }

    //populate table
    table = document.getElementById('truthTable');
    
    table.innerHTML = "<tr>";
    for(v in vars){
        let node = document.createElement("th")
        node.innerText = vars[v];
        table.appendChild(node);
        vars[v] = 0;
    }
    table.innerHTML += "<th>result</th></tr>"

    while(true){
        let row = document.createElement("tr");
        
        for(i in vars){
            let node = document.createElement("td");
            node.innerText = vars[i] ? '1' : '0';
            row.appendChild(node)
        }        
        
        let node = document.createElement("td")
        node.innerText = evaluate(vars) ? '1' : '0'
        row.appendChild(node)
        
        table.appendChild(row);

        //itterate. binary
        carry = true;
        for(v in vars){
            if(vars[v] && carry){
                vars[v] = false;
            }else{
                vars[v] ||= carry;
                carry = false;
                break;
            }
        }
        if(carry) break;
    }
}