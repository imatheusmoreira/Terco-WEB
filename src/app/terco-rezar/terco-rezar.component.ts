import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terco-rezar',
  templateUrl: './terco-rezar.component.html',
  styleUrls: ['./terco-rezar.component.css']
})
export class TercoRezarComponent implements OnInit {


  //Relacionado aos detalhes
  public momento = 0;
  public oracao = 0;
  public oracaoAux = 0;
  public oracaoNecessitaContador: boolean = false;
  public contadorGlobal: number = -1;
  public oracaoContador = 1;
  public oracaoTotal = 10;
  public misterio = 1;

  public oracaoTitulo = ""
  public oracaoTexto = ""

  ngOnInit() {
    this.atualizaTexto();
  }

  atualizaTexto(){
    this.oracaoTitulo = this.getOracao(this.oracao).split("#")[0]
    this.oracaoTexto = this.getOracao(this.oracao).split("#")[1]
  }

  voltar() {

    this.contadorGlobal--;

    if(this.contadorGlobal < -1){
      this.contadorGlobal ++
    }

    var agora: number[] = this.getOracaoVetor()[this.contadorGlobal];
    this.momento = agora[0];
    this.oracao = agora[1];
    this.misterio = agora[2];

    agora[3] == 1 ? this.oracaoNecessitaContador = true : this.oracaoNecessitaContador = false;

    if(this.oracaoNecessitaContador){
      if(this.oracaoAux == 0){
        this.oracaoAux = this.oracao;
        this.oracaoContador = 1;
      }else
      if(this.oracaoAux == this.oracao){
        this.oracaoContador --;
      }else{
        this.oracaoAux = this.oracao;
        this.oracaoContador = 1;
      }
    }else{
      this.oracaoContador = 0;
      this.oracaoAux = 0;
    }

    this.atualizaTexto()
  }

  avancar() {

    this.contadorGlobal++;

    try {

      var agora: number[] = this.getOracaoVetor()[this.contadorGlobal];
      this.momento = agora[0];
      this.oracao = agora[1];
      this.misterio = agora[2];

      agora[3] == 1 ? this.oracaoNecessitaContador = true : this.oracaoNecessitaContador = false;

      if (this.oracaoNecessitaContador) {
        if (this.oracaoAux == 0) {
          this.oracaoAux = this.oracao;
          this.oracaoContador = 1;
        } else
          if (this.oracaoAux == this.oracao) {
            this.oracaoContador++;
          } else {
            this.oracaoAux = this.oracao;
            this.oracaoContador = 1;
          }
      } else {
        this.oracaoContador = 0;
        this.oracaoAux = 0;
      }
    } catch (error) {
      this.contadorGlobal=-1;
    }

    this.atualizaTexto()
  }

  public getOracaoVetor() {
    //Momento, Oração, mistério, usa contador.
    var oracoes: number[][] = [
      [1, 1, 0, 0],
      [2, 2, 0, 0],
      [3, 3, 0, 0],
      [4, 4, 0, 0],
      [5, 5, 0, 0], [5, 6, 0, 1], [5, 6, 0, 1], [5, 6, 0, 1], [8, 7, 0, 0], [8, 8, 0, 0],
      [6, 21, 1, 0], [6, 5, 1, 0], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [6, 6, 1, 1], [8, 7, 1, 0], [8, 8, 1, 0],
      [6, 22, 2, 0], [6, 5, 2, 0], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [6, 6, 2, 1], [8, 7, 2, 2], [8, 8, 2, 0],
      [6, 23, 3, 0], [6, 5, 3, 0], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [6, 6, 3, 1], [8, 7, 3, 2], [8, 8, 3, 0],
      [6, 24, 4, 0], [6, 5, 4, 0], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [6, 6, 4, 1], [8, 7, 4, 2], [8, 8, 4, 0],
      [6, 25, 5, 0], [6, 5, 5, 0], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [6, 6, 5, 1], [8, 7, 5, 2], [8, 8, 5, 0],
      [7, 9, 0, 0], [7, 10, 0, 0]
    ];
    return oracoes;
  }

  /*1=Gloriosos, 2=Gozosos, 3=Dolorosos, 4=Luminosos*/
  getNumeroTipoMisterio(){
    var d = new Date();
    var numDiaDaSemana = d.getDay();//Outputs 1 when it's Segunda.
    switch (numDiaDaSemana) {
      case 0://Domingo
        return 1
      case 1://Segunda
        return 2
      case 2://Terça
        return 3
      case 3://Quarta
        return 1
      case 4://Quinta
        return 4
      case 5://Sexta
        return 3
      case 6://Sábado
        return 1
      default:
        return 2
    }
  }

  getRecitacaoMisterio(numeroMisterio: number) {
    var numeroTipoMisterio: number = this.getNumeroTipoMisterio(); /*1=Gloriosos, 2=Gozosos, 3=Dolorosos, 4 = Luminosos*/
    switch (numeroMisterio) {

      case 1://Primeiro mistério
        switch (numeroTipoMisterio) {
          case 1://Gloriosos
            return "Primeiro Mistério#Neste primeiro mistério contemplamos a Ressurreição de Jesus. Fruto do Mistério: O amor de Deus e o fervor no Vosso serviço."
          case 2://Gozosos
            return "Primeiro Mistério#Neste primeiro mistério contemplamos a Anunciação do Anjo Gabriel a Maria. Fruto do Mistério: Profunda humildade."
          case 3://Dolorosos
            return "Primeiro Mistério#Neste primeiro mistério contemplamos a Agonia de Jesus no Horto das Oliveiras. Fruto do Mistério: Contrição dos pecados."
          case 4://Luminosos
            return "Primeiro Mistério#Neste primeiro mistério contemplamos o Batismo de Jesus no rio Jordão. Fruto do mistério: A graça de ser cheio do Espírito Santo."
          default://Desconhecido
            return "Primeiro Mistério#Comentário."
        }

      case 2://Segundo mistério
        switch (numeroTipoMisterio) {
          case 1://Gloriosos
            return "Segundo Mistério#Neste segundo mistério contemplamos a Ascensão de Jesus nos Céus. Fruto do Mistério: Um ardente desejo do Céu, nossa cara pátria."
          case 2://Gozosos
            return "Segundo Mistério#Neste segundo mistério contemplamos a Visita de Maria à sua prima Isabel. Fruto do Mistério: Caridade para com o próximo."
          case 3://Dolorosos
            return "Segundo Mistério#Neste segundo mistério contemplamos a Flagelação de Cristo. Fruto do Mistério: Mortificação dos nossos sentidos."
          case 4://Luminosos
            return "Segundo Mistério#Neste segundo mistério contemplamos o milagre nas Bodas de Caná. Fruto do mistério: Que nunca nos falte a graça de Deus em nossas famílias."
          default://Desconhecido
            return "Segundo Mistério#Comentário."
        }

      case 3://Terceiro mistério
        switch (numeroTipoMisterio) {
          case 1://Gloriosos
            return "Terceiro Mistério#Neste terceiro mistério contemplamos a Vinda do Espírito Santo. Fruto do Mistério: A descida do Espírito Santo em nossas almas."
          case 2://Gozosos
            return "Terceiro Mistério#Neste terceiro mistério contemplamos o Nascimento de Jesus em Belém. Fruto do Mistério: Desapego aos bens terrenos, à riqueza e um amor à pobreza."
          case 3://Dolorosos
            return "Terceiro Mistério#Neste terceiro mistério contemplamos a Coroação de Espinhos. Fruto do Mistério: O Desprezo do mundo."
          case 4://Luminosos
            return "Terceiro Mistério#Neste terceiro mistério contemplamos a Proclamação de Jesus sobre o Reino de Deus. Fruto do mistério: A graça de viver e anunciar o Evangelho."
          default://Desconhecido
            return "Terceiro Mistério#Comentário."
        }

      case 4://Quarto mistério
        switch (numeroTipoMisterio) {
          case 1://Gloriosos
            return "Quarto Mistério#Neste quarto mistério contemplamos a Assunção de Maria aos Céus. Fruto do Mistério: Uma terna devoção a tão boa Mãe."
          case 2://Gozosos
            return "Quarto Mistério#Neste quarto mistério contemplamos a Apresentação de Jesus no Templo e Purificação de Maria. Fruto do Mistério: Uma pureza de alma e de corpo."
          case 3://Dolorosos
            return "Quarto Mistério#Neste quarto mistério contemplamos Jesus carregando a Cruz. Fruto do Mistério: Paciência nas nossas cruzes."
          case 4://Luminosos
            return "Quarto Mistério#Neste quarto mistério contemplamos a Transfiguração de Jesus. Fruto do mistério: A graça de sermos configurados à Divina Humanidade de Jesus."
          default://Desconhecido
            return "Quarto Mistério#Comentário."
        }

      case 5://Quinto mistério
        switch (numeroTipoMisterio) {
          case 1://Gloriosos
            return "Quinto Mistério#Neste quinto mistério contemplamos a Coroação de Maria, como Rainha dos Céus. Fruto do Mistério: Perseverança na graça e a Coroa da Glória."
          case 2://Gozosos
            return "Quinto Mistério#Neste quinto mistério contemplamos o Encontro do Menino Jesus no templo. Fruto do Mistério: A verdadeira sabedoria."
          case 3://Dolorosos
            return "Quinto Mistério#Neste quinto mistério contemplamos a Crucificação de Jesus. Fruto do Mistério: A conversão dos pecadores, a perseverança dos justos e o alívio das almas do Purgatório."
          case 4://Luminosos
            return "Quinto Mistério#Neste quinto mistério contemplamos a Instituição da Eucaristia. Fruto do mistério: A graça de termos sempre um coração adorador."
          default://Desconhecido
            return "Quinto Mistério#Comentário."
        }

      default:
        return "Mistério desconhecido!#Não existe " + numeroMisterio+ "º mistério.";
    }
  }

  public getOracao(oracaoId) {
    switch (oracaoId) {
      case 1:
        return "Sinal da cruz#Em nome do Pai do Filho e do Espírito Santo. Amém.";
      case 2:
        return "Oferecimento#Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da Vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.";
      case 3:
        return "Invocação do Espírito Santo#Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado, e renovareis a face da terra." +
          " Oremos: Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da sua consolação. Por Cristo Senhor Nosso. Amém.";
      case 4:
        return "Creio em Deus#Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos; creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.";
      case 5:
        return "Pai Nosso#Pai Nosso, que estais no Céu, Santificado seja o Vosso Nome, Venha a nós o Vosso Reino, Seja feita a Vossa Vontade, Assim na Terra como no Céu, O Pão-Nosso de cada dia nos daí hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal.";
      case 6:
        return "Ave Maria#Ave-Maria, cheia de graça!O Senhor é convosco; Bendita sois vóis entre as mulheres; E Bendito é o Fruto do vosso ventre, Jesus; Santa Maria Mãe de Deus, Rogai por nós os pecadores; Agora e na hora de nossa morte. Amém";
      case 7:
        return "Glória ao Pai#Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém";
      case 8:
        return "Óh! meu Jesus...#Óh! meu Jesus, perdoai-nos, livrai-nos do fogo do inferno. Levai as almas todas para o céu e socorrei principalmente as que mais precisarem.";
      case 9:
        return "Infinitas graças vos damos...#Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos agora e para sempre tomar-nos debaixo de vosso poderoso amparo e para mais vos suplicar vos saudamos com uma Salve Rainha.";
      case 10:
        return "Salve Rainha#Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce e sempre Virgem Maria.Rogai por nós, Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Amém";
      case 21:
        return this.getRecitacaoMisterio(1);
      case 22:
        return this.getRecitacaoMisterio(2);
      case 23:
        return this.getRecitacaoMisterio(3);
      case 24:
        return this.getRecitacaoMisterio(4);
      case 25:
        return this.getRecitacaoMisterio(5);
      default:
        return "Pronto para começar?#Assim que estiver pronto para começar, aperte em \"Iniciar\""
        break;
    }
  }

}
