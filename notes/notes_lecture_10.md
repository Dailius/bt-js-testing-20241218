

## 1. Repeat and check homework
## 2. Create Smoke test for mobile app.

Mob app 'autobusu bielietai'

SMOKE TEST

1. Idiegimas ir paleidimas  
	1.1 Idiegimas ir paleidimas atlikus teisingus veiksmus
2. Registracija  
	2.1 Registracija ivedus teisingus duomenis
3. Prisijungimas  
	3.1 Prisijungimas ivedus teisingus duomenis
4. Keliones paieska  
	4.1 Keliones paieska ivedus teisingus duomenis
5. Pirkimas  
	5.1 Pirkimass ivedus teisingus duomenis
6. Mokejimo pasirinkimas  
	6.1 Mokejimo pasirinkimas ivedus teisingus duomenis
7. Atsijungimas
    7.1 Atsijungti nuo paskyros.
8. Issiregistravimas
	7.1 Paskyros panaikinias
9.  Isdiegimas  
	8.1 Isdiegimasatlikus teisingus veiksmus
10. UI klaidos, neatitikimai.  

## 3. Defects and severities

ISQTB  
https://astqb.org/  
https://www.istqb.org/  

Prioretizavimas skiriasi nuo poziurio tasko:
1. programuotojas
2. testuotojas
3. PO - project owner
4. vartotojas


### Critical

Kritinis defektas, dėl kurio neįmanoma tęsti testavimo ar naudoti sistemos.   
Pvz.: programa nulūžta iškart paleidus, nėra galimybės prisijungti prie sistemos.  
Viena iš pagrindinių funkcijų neveikia. Neturi "workaround".  
Visa kas susije su saugumu, nuluzimais (crashes), duomenu praradimai ir pan.
Dazniausiai susije su funkciniais testais, pagrindinemis funkcijomis.
Aptinkama atliekant smoke, regression testus.  
klaidos gaunamos atliekant pozityvius testus.

### High
Didelės įtakos turintis defektas, kuris daro didelę žalą sistemai, bet gali būti tam tikri būdai jį apeiti.  
Pvz.: duomenų praradimas, sisteminiai klaidingi skaičiavimai.   
Susije su pagrindinemis funkcijomis, workaround vartotojas atlikti pats negali.   
Dazniausiai susije su funkciniais testais, pagrindinemis funkcijomis.  
Klaidos gaunamos atliekant pozityvius testus. 

### Medium

Svarbus defektas, kuris daro pastebimą įtaką sistemos funkcionalumui, bet vis dar įmanoma naudotis sistema.  
Pvz.: neveikiantis konkretus funkcionalumas, neteisingai pateikiami duomenys.  
Dazniausiai susijes su salutinemis funkcijomis, workaround lengvai atlieka pats vartotojas, klaidos gaunamos is negatyviu testu, UI/UX klaidos.  

### Low

Daro minimalią įtaką sistemos veikimui arba neturi jokios įtakos funkcionalumui, bet gali būti vizualinė ar kosmetinė klaida.  
Pvz.: nedideli UI neatitikimai, neteisingas pranešimų formatavimas, ašybos klaida, mygtuko išdėstymo neatitikimas ir pan. 

## 4. Bug lifecycle

![](/pictures/bug_lifecycle.png)

1. Title

    Tai vienas iš svarbiausių punktų.
   Turi būti aiškus, koncentruotas,  perskaičius antraštę turi būti aišku kokia problema rasta.
   Pavadinimas turi atsakyti į sekančius klausymus:
      * kas atsitiko
      * kurioje vietoje
      * prie kurių aplinkybių
   
   pvz.E2E: 
      "Amount of 'followers' is missing on the users page when user logged in." 

   pvz.API:
      Standartinė situacija, kuri neturi specialių aplinkybiu.
      Nors galima pažymėti, kad "when token is present" arba "when user logged in"
      "Internal Server Error with 200 upon sending GET /admin/users"

2. Descritpion: steps to reproduce
   
    Aiškūs, konkretūs, apgalvoti, optimizuoti.  
   Pridėti klaidos paveikslėlį, logus ar kitą susietą informaciją, kuri padėtu išanalizuoti defektą.  
   
   Pre-requisites. Pvz.: existing account with followers
   pvz.E2E:
      1st stp. Navigate to users page
      2nd stp. Observe amount of followers

      Expected: Amount of followers is visible
      Actual: Amount of followers is not visible

   Pre-requisites. Pvz.: existing few users
   pvz.API:
      1st stp. Send GET request to /admin/users
      2nd stp. Observe response

      Expected: list of users
      Actual: message 'internal server error'  with response code 200

3. Environment
    Nurodome sistemos parametrus, versijas, OS ir pan.

   Pvz:
      Chrome version 133.0.6943.142
      QA environment
      Postman

4. Build version
    Nurodome kurioje produkto versijoje buvo rasta problema.

5. Severity
    Viena problema = vienas uzregistruotas defektas.  
    Laibai smuklius defektus galima registruoti kaip viena defekta. Komanda turi sutarti bendrai.

## 5. Jira

https://home.atlassian.com/

## 6. Exercise to register bugs into Jira



