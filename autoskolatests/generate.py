# -*- coding: utf-8 -*-
from codecs import open as copen
from os import listdir

gen_img = lambda imgName: f'<img class="w-100 my-1" src="imgs/{imgName}"><br/>\n'
tempf = copen("template.html", "r", "utf-8")
indexf = copen("index.html", "w+", "utf-8")

template = tempf.read()
imgstr = u""
for name in listdir("./imgs"):
  imgstr += gen_img(name)

outstr = template.replace("{{images}}", imgstr)
indexf.write(outstr)

tempf.close()
indexf.close()