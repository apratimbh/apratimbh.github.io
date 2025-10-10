---
layout: default
title: Apratim Bhattacharyya
---

<section id="bio">
## Biography

I am a Machine Learning Researcher at Qualcomm AI Research. My research interests lie in the areas of Large Language Models, Generative Models and Bayesian Inference. Previously, I was a Postdoc at the University of Tuebingen working in the Autonomous Vision Group. Before that I was a PhD student at the Max Planck Institut für Informatik, Saarbrücken, advised by Dr. Bernt Schiele and Dr. Mario Fritz (My PhD thesis is available here). I completed my Master’s Thesis at Saarland University under the supervision of Dr. Jilles Vreeken in the area of Algorithmic Data Mining and my Bachelors degree at the National Institute of Technology, Karnataka, India.
</section>

<section id="publications">
## Publications

{% assign pubs = site.data.publications | sort: "year" | reverse %}
<ol>
{% for p in pubs %}
  <li>
    {% if p.authors %}{{ p.authors }}. {% endif %}
    {% if p.title %}<em>{{ p.title }}</em>.{% endif %}
    {% if p.venue %} {{ p.venue }}{% endif %}
    {% if p.year %}, {{ p.year }}.{% endif %}
    {% if p.notes %} <strong>{{ p.notes }}</strong>{% endif %}
    {% if p.link %} {{ p.link }}[link]</a>{% endif %}
  </li>
{% endfor %}
</ol>
</section>

<section id="links">
## Links

- LinkedIn{:target="_blank" rel="noopener"}
- [Google Scholar](https://scholarrel="noopener"}
</section>
