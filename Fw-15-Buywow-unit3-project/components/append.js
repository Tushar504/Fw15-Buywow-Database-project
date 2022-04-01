function append_html(){
    return `<div id="select_tag">
    <div id="grid_items">
       <img  id="creat_grid" src="first.png">
       <img  id="creat_detailed" src="afterclick2.png">
    </div>
    <select  id="select_option">
        <option value="">Featured</option>
        <option value="low">Price,Low To High</option>
        <option value="high">Price,High To Low</option>
    </select>
</div>
<div id="main"></div>
<div id="detailed"></div>`
}

export default append_html