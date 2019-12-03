from django.db import models

MAX_TEXT_LENGTH = 1000000

class Paragraph(models.Model):
  text = models.CharField(max_length=MAX_TEXT_LENGTH)


class Word(models.Model):
	word = models.CharField(max_length=1000)
	paragraphs = models.ManyToManyField(Paragraph)

