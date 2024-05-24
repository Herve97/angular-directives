import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{ 
      this.vcRef.clear();
    }

  }
  // TemplateRef nous permet de spécifier quel type d'élement nous voulons utiliser
  // ViewContainerRef nous permet de spécifier où allons-nous utliser l'élément
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
