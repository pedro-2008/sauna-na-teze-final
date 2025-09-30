// Toast functionality
let toastContainer = null;

function showToast(title, description) {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-description">${description}</div>
  `;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// Hero Component
const Hero = () => {
  return React.createElement('section', {
    className: 'relative min-h-screen flex items-center justify-center overflow-hidden'
  }, [
    // Background Image
    React.createElement('div', {
      key: 'bg',
      className: 'absolute inset-0 bg-cover bg-center bg-no-repeat',
      style: { backgroundImage: 'url(./sauna-hero.jpg)' }
    }, React.createElement('div', {
      className: 'absolute inset-0 bg-black/30'
    })),
    
    // Content
    React.createElement('div', {
      key: 'content',
      className: 'relative z-10 text-center text-white px-6 max-w-4xl mx-auto'
    }, [
      React.createElement('h1', {
        key: 'title',
        className: 'text-5xl md:text-7xl font-light mb-6 tracking-wide'
      }, 'Sauna Na Teze'),
      
      React.createElement('p', {
        key: 'subtitle',
        className: 'text-xl md:text-2xl mb-8 font-light opacity-90'
      }, 'Autentická finská sauna v srdci Hodonína'),
      
      React.createElement('p', {
        key: 'description',
        className: 'text-lg mb-12 opacity-80 max-w-2xl mx-auto'
      }, 'Objevte sílu tradičního finského saunování v našem moderním wellness centru. Relaxace, regenerace a pohoda pro tělo i duši.'),
      
      React.createElement('div', {
        key: 'buttons',
        className: 'flex flex-col sm:flex-row gap-4 justify-center'
      }, [
        React.createElement('button', {
          key: 'rezervace',
          className: 'btn btn-secondary btn-lg',
          onClick: () => {
            showToast('Rezervace', 'Pro rezervaci volejte +420 123 456 789 nebo navštivte sekci Kontakt');
          }
        }, 'Rezervace'),
        
        React.createElement('button', {
          key: 'info',
          className: 'btn btn-outline btn-lg bg-transparent border-white text-white hover:bg-white hover:text-primary',
          onClick: () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 'Více informací')
      ])
    ])
  ]);
};

// About Component
const About = () => {
  const benefits = [
    "Zlepšení krevního oběhu",
    "Detoxikace organismu", 
    "Snížení stresu a napětí",
    "Posílení imunitního systému",
    "Zlepšení kvality spánku",
    "Uvolnění svalů po sportě"
  ];

  return React.createElement('section', {
    id: 'about',
    className: 'py-24 px-6 bg-gradient-soft'
  }, React.createElement('div', {
    className: 'max-w-6xl mx-auto'
  }, React.createElement('div', {
    className: 'grid lg:grid-cols-2 gap-16 items-center'
  }, [
    React.createElement('div', {
      key: 'left'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-4xl md:text-5xl font-light mb-8 text-primary'
      }, 'Finská tradice v moderním pojetí'),
      
      React.createElement('p', {
        key: 'desc1',
        className: 'text-lg text-muted-foreground mb-8 leading-relaxed'
      }, 'Naše sauna kombinuje autentickou finskou tradici s moderním komfortem. V klidném prostředí můžete relaxovat, regenerovat tělo a načerpat novou energii.'),
      
      React.createElement('p', {
        key: 'desc2',
        className: 'text-lg text-muted-foreground mb-8 leading-relaxed'
      }, 'Věříme v sílu saunování jako způsobu života. Každá návštěva je rituálem očisty těla i mysli, který vám pomůže najít rovnováhu v hektickém světě.'),
      
      React.createElement('div', {
        key: 'stats',
        className: 'grid grid-cols-2 gap-6 text-center'
      }, [
        React.createElement('div', {
          key: 'temp',
          className: 'p-4'
        }, [
          React.createElement('div', {
            key: 'value',
            className: 'text-3xl font-light text-accent mb-2'
          }, '80-90°C'),
          React.createElement('div', {
            key: 'label',
            className: 'text-sm text-muted-foreground'
          }, 'Ideální teplota')
        ]),
        React.createElement('div', {
          key: 'wood',
          className: 'p-4'
        }, [
          React.createElement('div', {
            key: 'value',
            className: 'text-3xl font-light text-accent mb-2'
          }, '100%'),
          React.createElement('div', {
            key: 'label',
            className: 'text-sm text-muted-foreground'
          }, 'Přírodní dřevo')
        ])
      ])
    ]),
    
    React.createElement('div', {
      key: 'right'
    }, [
      React.createElement('h3', {
        key: 'benefits-title',
        className: 'text-2xl font-medium mb-8 text-wood-deep'
      }, 'Zdravotní benefity'),
      
      React.createElement('div', {
        key: 'benefits-list',
        className: 'space-y-4'
      }, benefits.map((benefit, index) => 
        React.createElement('div', {
          key: index,
          className: 'flex items-center p-4 bg-white rounded-lg shadow-soft'
        }, [
          React.createElement('div', {
            key: 'dot',
            className: 'w-2 h-2 rounded-full bg-accent mr-4 flex-shrink-0'
          }),
          React.createElement('span', {
            key: 'text',
            className: 'text-muted-foreground'
          }, benefit)
        ])
      ))
    ])
  ])));
};

// Services Component
const Services = () => {
  const services = [
    {
      title: "Finská sauna",
      description: "Tradiční finská sauna s teplotou 80-90°C. Ideální pro regeneraci a relaxaci.",
      features: ["Severské dřevo", "Kamna na dřevo", "Kapacita 8 osob"]
    },
    {
      title: "Odpočívárna",
      description: "Klidný prostor pro relaxaci mezi saunovými sezeními s občerstvením.",
      features: ["Pohodlné lehátka", "Čerstvé ovoce", "Bylinné čaje"]
    },
    {
      title: "Venkovní terasa",
      description: "Prostor pro ochlazení a odpočinek na čerstvém vzduchu.",
      features: ["Dřevěná terasa", "Zahradní sprcha", "Posezení"]
    }
  ];

  return React.createElement('section', {
    className: 'py-24 px-6 bg-background'
  }, React.createElement('div', {
    className: 'max-w-6xl mx-auto'
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'text-center mb-16'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-4xl md:text-5xl font-light mb-6 text-primary'
      }, 'Naše služby'),
      React.createElement('p', {
        key: 'desc',
        className: 'text-lg text-muted-foreground max-w-2xl mx-auto'
      }, 'Kompletní saunový zážitek s veškerým komfortem pro vaši pohodu')
    ]),
    
    React.createElement('div', {
      key: 'grid',
      className: 'grid md:grid-cols-3 gap-8'
    }, services.map((service, index) => 
      React.createElement('div', {
        key: index,
        className: 'card border-0 shadow-soft hover:shadow-warm transition-shadow duration-300'
      }, [
        React.createElement('div', {
          key: 'header',
          className: 'card-header'
        }, React.createElement('h3', {
          className: 'card-title text-wood-deep'
        }, service.title)),
        
        React.createElement('div', {
          key: 'content',
          className: 'card-content'
        }, [
          React.createElement('p', {
            key: 'desc',
            className: 'text-muted-foreground mb-6 leading-relaxed'
          }, service.description),
          
          React.createElement('ul', {
            key: 'features',
            className: 'space-y-2'
          }, service.features.map((feature, featureIndex) => 
            React.createElement('li', {
              key: featureIndex,
              className: 'flex items-center text-sm text-muted-foreground'
            }, [
              React.createElement('div', {
                key: 'dot',
                className: 'w-1.5 h-1.5 rounded-full bg-accent mr-3'
              }),
              feature
            ])
          ))
        ])
      ])
    ))
  ]));
};

// Contact Component
const Contact = () => {
  return React.createElement('section', {
    className: 'py-24 px-6 bg-gradient-hero'
  }, React.createElement('div', {
    className: 'max-w-6xl mx-auto'
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'text-center mb-16'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-4xl md:text-5xl font-light mb-6 text-primary'
      }, 'Kontakt a rezervace'),
      React.createElement('p', {
        key: 'desc',
        className: 'text-lg text-muted-foreground'
      }, 'Těšíme se na vaši návštěvu v Sauna Na Teze')
    ]),
    
    React.createElement('div', {
      key: 'cards',
      className: 'grid md:grid-cols-2 gap-12'
    }, [
      React.createElement('div', {
        key: 'hours',
        className: 'card border-0 shadow-soft'
      }, [
        React.createElement('div', {
          key: 'header',
          className: 'card-header'
        }, React.createElement('h3', {
          className: 'card-title text-wood-deep'
        }, 'Otevírací doba')),
        
        React.createElement('div', {
          key: 'content',
          className: 'card-content space-y-4'
        }, [
          React.createElement('div', {
            key: 'weekdays',
            className: 'flex justify-between'
          }, [
            React.createElement('span', {
              key: 'label',
              className: 'text-muted-foreground'
            }, 'Pondělí - Pátek'),
            React.createElement('span', {
              key: 'time',
              className: 'text-primary font-medium'
            }, '15:00 - 22:00')
          ]),
          React.createElement('div', {
            key: 'weekend',
            className: 'flex justify-between'
          }, [
            React.createElement('span', {
              key: 'label',
              className: 'text-muted-foreground'
            }, 'Sobota - Neděle'),
            React.createElement('span', {
              key: 'time',
              className: 'text-primary font-medium'
            }, '10:00 - 22:00')
          ]),
          React.createElement('div', {
            key: 'note',
            className: 'pt-4 border-t border-border'
          }, React.createElement('p', {
            className: 'text-sm text-muted-foreground'
          }, 'Rezervace doporučujeme předem telefonicky nebo online'))
        ])
      ]),
      
      React.createElement('div', {
        key: 'contact',
        className: 'card border-0 shadow-soft'
      }, [
        React.createElement('div', {
          key: 'header',
          className: 'card-header'
        }, React.createElement('h3', {
          className: 'card-title text-wood-deep'
        }, 'Kde nás najdete')),
        
        React.createElement('div', {
          key: 'content',
          className: 'card-content space-y-4'
        }, [
          React.createElement('div', {
            key: 'address'
          }, [
            React.createElement('p', {
              key: 'label',
              className: 'text-muted-foreground mb-1'
            }, 'Adresa'),
            React.createElement('p', {
              key: 'value',
              className: 'text-primary font-medium'
            }, 'Na Teze 123, Hodonín')
          ]),
          React.createElement('div', {
            key: 'phone'
          }, [
            React.createElement('p', {
              key: 'label',
              className: 'text-muted-foreground mb-1'
            }, 'Telefon'),
            React.createElement('p', {
              key: 'value',
              className: 'text-primary font-medium'
            }, '+420 123 456 789')
          ]),
          React.createElement('div', {
            key: 'email'
          }, [
            React.createElement('p', {
              key: 'label',
              className: 'text-muted-foreground mb-1'
            }, 'Email'),
            React.createElement('p', {
              key: 'value',
              className: 'text-primary font-medium'
            }, 'info@saunanateze.cz')
          ]),
          React.createElement('div', {
            key: 'button',
            className: 'pt-4'
          }, React.createElement('button', {
            className: 'btn btn-primary btn-lg w-full',
            onClick: () => {
              window.open('tel:+420123456789', '_self');
            }
          }, 'Rezervovat nyní'))
        ])
      ])
    ]),
    
    React.createElement('div', {
      key: 'pricing',
      className: 'mt-16 text-center bg-white rounded-lg p-8 shadow-soft'
    }, [
      React.createElement('h3', {
        key: 'title',
        className: 'text-2xl font-medium mb-4 text-wood-deep'
      }, 'Ceník'),
      React.createElement('div', {
        key: 'prices',
        className: 'grid md:grid-cols-3 gap-8'
      }, [
        React.createElement('div', {
          key: '1h'
        }, [
          React.createElement('div', {
            key: 'price',
            className: 'text-3xl font-light text-accent mb-2'
          }, '150 Kč'),
          React.createElement('div', {
            key: 'duration',
            className: 'text-sm text-muted-foreground'
          }, '1 hodina')
        ]),
        React.createElement('div', {
          key: '2h'
        }, [
          React.createElement('div', {
            key: 'price',
            className: 'text-3xl font-light text-accent mb-2'
          }, '250 Kč'),
          React.createElement('div', {
            key: 'duration',
            className: 'text-sm text-muted-foreground'
          }, '2 hodiny')
        ]),
        React.createElement('div', {
          key: 'day'
        }, [
          React.createElement('div', {
            key: 'price',
            className: 'text-3xl font-light text-accent mb-2'
          }, '400 Kč'),
          React.createElement('div', {
            key: 'duration',
            className: 'text-sm text-muted-foreground'
          }, 'Celý den')
        ])
      ])
    ])
  ]));
};

// Main App Component
const App = () => {
  return React.createElement('div', {
    className: 'min-h-screen'
  }, [
    React.createElement(Hero, { key: 'hero' }),
    React.createElement(About, { key: 'about' }),
    React.createElement(Services, { key: 'services' }),
    React.createElement(Contact, { key: 'contact' })
  ]);
};

// Render the app
ReactDOM.render(React.createElement(App), document.getElementById('root'));