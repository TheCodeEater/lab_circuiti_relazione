function canvas_arrow(context, fromx, fromy, tox, toy) {
    const headlen = 10; // length of head in pixels
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

ctx = document.getElementById("c").getContext("2d");
ctx.beginPath();
canvas_arrow(ctx, 313, 260, 550, 260);
canvas_arrow(ctx, 650, 345, 650, 413);
canvas_arrow(ctx, 650, 610, 650, 673);
canvas_arrow(ctx, 552, 730, 315, 350);
canvas_arrow(ctx, 170, 412, 170, 608);
ctx.stroke();


