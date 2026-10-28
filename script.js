const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0;
    document.querySelectorAll(".price").forEach((item)=>{
        sum+=Number(item.textContent)

    })
    const table = document.querySelector("table");
    const row = document.createElement("tr")
    row.innerHTML = `
    <td>Total Value</td>
    <td>${sum}</td>
    `
    table.append(row);
};

getSumBtn.addEventListener("click", getSum);

