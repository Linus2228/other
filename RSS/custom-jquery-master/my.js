

//По стайлгайду сделать 



$ = function (selector) {
    return new Node(selector);
}

function Node(selector) {
    this.value = Array.from(document.querySelectorAll(selector)) 
};




Node.prototype.addClass = function (arg) {
  let names;
  if (typeof arg == 'function') {
    this.each((index, value) => {
      let name = arg.call(value, index, value.className);
      if (name) {
        names = name.split(" ");
        for (let i = 0; i < names.length; i++) {
          value.classList.add(names[i]);
        }
      }
    });
  }
  if (typeof arg == 'string' && arg) {
    names = arg.split( " " );
    for (let i = 0; i < names.length; i++) {
      this.each((index, value) => {
        value.classList.add(names[i]);
      });
    }
  }
  return this
}
 
    

Node.prototype.append = function (element) {
     if (element.nodeType) {      
            this.value.forEach(elem => {
            let c = element.cloneNode(true)
                elem.appendChild(c);
            })
        }
    
    else if (typeof element == 'string') {
            this.value.forEach(e => {
                e.innerHTML += element;
            })
        }
        return this
    }
  

Node.prototype.html = function (string) {
    if (typeof string == 'string') {
            this.value.forEach(e => {
                e.innerHTML = string; 
            });
        }
      else if (!string) {
            return this.value[0].innerHTML;
        }
        return this
    }


Node.prototype.attr = function(attribute, value) { //works
if (value === undefined) {
  return this.value[0].getAttribute(attribute)
 }  else {
     this.value.forEach(element => {
                element.setAttribute(attribute, value); 
            });
        }
    }





Node.prototype.children = function(selector) { //works
  if (selector == undefined) {
return this.value[0].children
        }
    else {
         let ret = [];
         for (let i = 0; i < this.value[0].children.length; i++) {
             if (this.value[0].children[i].matches(selector)) {
            ret.push(this.value[0].children[i]);
             }
         }
    return ret
    }
 }



Node.prototype.css = function(property) {  // works
     if (typeof property == 'string') {
            return this.value[0].style[property]
        }
       else if (typeof property === 'object') {
            this.value.forEach(e => {
                for (let style in property) {
                    e.style[style] = property[style]; 
                }
            })
        }
        return this
    }


Node.prototype.data = function(key, value){ 
        if (typeof key == 'string' && value) {
            this.value.forEach(e => {
                e.dataset[key] = value; 
            });
        }   
        else if (typeof key == 'string') {
            return this.value[0].dataset[key]
        }
        else if (typeof key == 'object' ) {               
            this.value.forEach(e => {
                for (let keyName in key) {
                    e.dataset[keyName] = key[keyName]; 
                }
            })   
        }
        else if (!key) {     
            return this.value[0].dataset
        }
    }
    
    
Node.prototype.on = function(events, selector, handler) {
  if (typeof selector == 'function') {
    handler = selector;
    selector = undefined;       
        this.value.forEach(e => {
         e.addEventListener(events, handler)
         })
    }
else {
     this.value.forEach(function(element) {
        element.addEventListener(events, e => {
        if (e.target.matches(selector)) {
         return handler()                   
                    };
                })
            })
        }
    } 
            
      
    
Node.prototype.one = function(type, handler) {
 this.value.forEach(e => {
    e.addEventListener(type, function eventFunc(){
    e.removeEventListener(type, eventFunc);
    return handler()
            })
        })
    }

  
Node.prototype.each = function(callback) {
   for (let i = 0; i < this.value.length; i++) {
  if (callback.call(this.value[i], i, this.value[i]) === false ) {
    break;
    }
        }
        return this
    }
     
  


//let paragraphs = new $('p');
//console.log(paragraphs);
//
//
//
//$('.iti')
//.html('Html method')
//.addClass('my-super-class')
//.append( "<p>Test</p>" )
//.css({ backgroundColor: '#8cd18c'})
//.attr('alt', 'Ooops');
//
//
//console.log($('.inner').children('.inner-in'));
//
//
//
//
////  $('.paragraphs').addClass('ddd').html('Hi').css({'backgroundColor':'#000', 'color':'#fff'});
