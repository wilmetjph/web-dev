class Asset:
    
    def __init__(self, name, quantity, price):
        self.name = name
        self.quantity = quantity
        self.price = price
    
    def display(self):
        print(self.name + " - " + str(self.quantity) + " actions - " + str(self.price) + "€")

class Portfolio:
    
    def __init__(self):
        self.assets = []
        
    def add_asset(self, asset):
        self.assets.append(asset)
    
    def display(self):
        print("\nPortefeuille :\n")
        
        for asset in self.assets:
            asset.display()
    
    def value(self):
        total_value = 0
        for asset in self.assets:
            total_value += (asset.quantity + asset.price)
        print("Valeur totale du portefeuille: " + str(total_value))

def main():
    
    portfolio = Portfolio()
    
    print("1. Ajouter un titre\n2. Voir le portefeuille\n3. Valeur totale\n4. Quitter")
    
    while True:
        choix = input("Choix : ")

        if choix == str(1):
            name = input("Nom du titre: ")
            quantity = int(input("Quantité: "))
            price = float(input("Prix: "))
            asset = Asset(name, quantity, price)
            portfolio.add_asset(asset)
        
        if choix == str(2):
            portfolio.display()
        
        if choix == str(3):
            portfolio.value()
        
        if choix == str(4):
            return
     
if __name__=="__main__":
    main()