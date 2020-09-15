def deleteChr(uInput):
  result = ""
  for i in range(len(uInput)):
    if not uInput[i] in["~","!","@","#","$","%","^","&","*","(",",",")","=","+","[","{","]","}",":","?",",","<",">"]:
      result = result + uInput[i]
  return result

def severalDotMakeOne(uInput):  
  result = uInput[0]
  for i in range(1,len(uInput)):
    if uInput[i] == '.':
      if not uInput[i-1] == ".":
        result = result + uInput[i]
    else:
      result = result + uInput[i]
  return result

def solve(uInput):
  newStr = uInput.lower()
  newStr = deleteChr(newStr)
  newStr = severalDotMakeOne(newStr)
  if len(newStr)>0 and newStr[0] == '.':
    newStr = newStr[1:]
  if len(newStr)>0 and newStr[-1] == '.':
    newStr = newStr[:-1]
  if len(newStr) <= 0:
    newStr = 'a'
  if len(newStr) >=16:
    newStr = newStr[:15]
    if newStr[-1] == '.':
      newStr = newStr[:-1]
  if len(newStr) < 3:
    newStr = newStr + newStr[-1] * 2
    newStr = newStr[:3]
  return newStr



print(solve(input()))

