// ===== Agro Troncos Viejos · maíz, lechería y animales (se carga después de charlas.js y antes de la configuración de empresa) =====
(function () {
  window.SI_CONT = window.SI_CONT || { temas: [] };
  const T = window.SI_CONT.temas;
  const ag = 'agricola';
  const Q = (s, v) => ({ s, v });
  T.push({
    id: 'mz_cosecha', sec: 'maiz', emp: [ag], title: 'Maíz: cosecha y maquinaria', thumb: 'si_ag_tdf_que', mins: 10,
    learn: [
      { s: 'si_ag_tdf_que', t: 'La cosechadora y la picadora no perdonan', x: 'La cosechadora y la picadora de maíz tienen <b>cuchillos, rodillos y cadenas</b> que atrapan manos y ropa en un instante. Nunca metas la mano para destapar o destrabar con la máquina andando.', k: 'Para destrabar: apaga, saca la llave y espera que todo se detenga.' },
      { s: 'si_ag_tdf_prot', t: 'Protectores y cardán siempre puestos', x: '<ul><li>Cardanes y poleas con su <b>protector completo</b>.</li><li>No uses la máquina si falta un resguardo: avisa.</li><li>Ropa ajustada y pelo amarrado.</li></ul>', k: 'Sin protector, no se trabaja.' },
      { s: 'si_ag_tdf_enganche', t: 'Tolvas, carros y tránsito en el campo', x: '<ul><li>Nadie entre el tractor y el carro al enganchar.</li><li>Mantente <b>fuera del radio</b> de la máquina y a la vista del operador.</li><li>En pendientes, baja la velocidad: el carro cargado empuja.</li></ul>', k: 'Fuera del radio de la máquina.' },
      { s: 'si_ag_ter_ramas', t: 'Polvo, calor y sol', x: 'En la cosecha hay <b>polvo, calor y sol</b>. Usa mascarilla para polvo, lentes, legionario, agua y pausas a la sombra. Si te sientes mareado, avisa.', k: 'Agua, sombra y mascarilla.' }
    ],
    quiz: [
      Q('si_ag_tdf_que', [{ q: 'La picadora se trabó. ¿Qué haces?', o: ['La apago, saco la llave y espero que se detenga', 'Meto la mano rápido con la máquina andando', 'Empujo con un palo mientras gira', 'La dejo andando y la destrabo de a poco'], w: 'Con la máquina andando puede atrapar la mano.' }]),
      Q('si_ag_tdf_prot', [{ q: 'Un protector del cardán está roto. ¿Usas la máquina?', vf: false, w: 'Falso. Sin protector completo no se usa y se avisa.' }]),
      Q('si_ag_tdf_enganche', [{ q: 'Al enganchar el carro, ¿dónde te ubicas?', o: ['A un costado, a la vista, con el tractor detenido', 'Entre el tractor y el carro', 'Detrás del carro que retrocede', 'Sobre el enganche mientras avanza'], w: 'Nadie entre el tractor y el implemento.' }])
    ]
  });
  T.push({
    id: 'mz_silo', sec: 'maiz', emp: [ag], title: 'Silos, secado y espacios cerrados', thumb: 'si_ag_ter_acequia', mins: 10,
    learn: [
      { s: 'si_ag_ter_acequia', t: 'El grano puede enterrarte', x: 'Dentro de un silo o tolva con grano, <b>caminar sobre el grano</b> es mortal: te hundes y quedas atrapado en segundos. Nunca entres con el grano en movimiento ni solo.', k: 'Nunca entres al silo con grano en movimiento.' },
      { s: 'si_ag_ter_aviso', t: 'Entrar solo con permiso y acompañante', x: '<ul><li>Entra solo con <b>autorización</b> de la jefatura.</li><li>Corta y bloquea el sinfín y el transporte del grano, y saca la llave.</li><li>Alguien queda <b>afuera</b>, atento, con arnés y cuerda.</li></ul>', k: 'Bloqueo, permiso y alguien afuera.' },
      { s: 'si_ag_apl_epp', t: 'Polvo y gases', x: 'El silo de forraje (ensilaje) puede generar <b>gases tóxicos</b> los primeros días y el grano seco levanta <b>polvo</b>. Ventila, usa mascarilla y no entres si hay olor fuerte o si te mareas: sal y avisa.', k: 'Mareo u olor fuerte: sal.' },
      { s: 'si_ag_esc_ok', t: 'Secador, quemador y escaleras', x: 'El secador tiene <b>llama, calor y partes que giran</b>. Apágalo antes de limpiar. Para subir al silo usa escalera con jaula o línea de vida, <b>tres puntos de apoyo</b>, y nunca con las manos ocupadas.', k: 'Apaga antes de limpiar; tres puntos de apoyo.' }
    ],
    quiz: [
      Q('si_ag_ter_acequia', [{ q: 'Caminar sobre el grano dentro del silo es seguro si es poco tiempo.', vf: false, w: 'Falso. El grano te hunde en segundos.' }]),
      Q('si_ag_ter_aviso', [{ q: 'Antes de entrar a un silo debes:', o: ['Bloquear el sinfín, tener permiso y alguien afuera', 'Entrar solo para ir más rápido', 'Dejar el sinfín andando por si acaso', 'Avisar después de salir'], w: 'Bloqueo, permiso y acompañante afuera.' }]),
      Q('si_ag_apl_epp', [{ q: 'Entras a un silo y sientes mareo y olor fuerte. ¿Qué haces?', o: ['Salgo de inmediato y aviso', 'Sigo un poco más para terminar', 'Me siento a descansar adentro', 'Respiro profundo y continúo'], w: 'El mareo puede indicar falta de oxígeno o gases.' }])
    ]
  });
  T.push({
    id: 'lc_ordena', sec: 'lecheria', emp: [ag], title: 'Sala de ordeña: higiene, pisos y máquinas', thumb: 'si_ag_esc_ok', mins: 10,
    learn: [
      { s: 'si_ag_esc_ok', t: 'Piso mojado y resbaloso', x: 'En la sala de ordeña el piso está <b>siempre mojado</b> y con guano. Usa <b>botas antideslizantes</b>, camina sin correr y avisa si hay derrames. Las caídas son los accidentes más comunes.', k: 'Botas antideslizantes y sin correr.' },
      { s: 'si_ag_abe_ropa', t: 'Ropa e higiene', x: '<ul><li>Delantal o ropa impermeable, guantes y botas limpias.</li><li>Lávate las manos antes y después del ordeño.</li><li>No comas ni bebas en la sala.</li></ul>', k: 'Manos limpias y sin comer en la sala.' },
      { s: 'si_ag_apl_epp', t: 'Cloro, ácidos y detergentes', x: 'Los productos de limpieza de la sala y del estanque <b>queman la piel y los ojos</b>. Lee la etiqueta, usa guantes y lentes, <b>nunca los mezcles</b> y déjalos en su envase rotulado.', k: 'No mezcles químicos; guantes y lentes.' },
      { s: 'si_ag_tdf_prot', t: 'Equipos, bombas y electricidad', x: 'Las bombas de vacío y el estanque de frío tienen <b>partes que giran</b> y electricidad en un lugar mojado. No metas la mano con el equipo andando y no uses cables dañados ni enchufes mojados.', k: 'Equipos apagados antes de limpiar.' }
    ],
    quiz: [
      Q('si_ag_esc_ok', [{ q: '¿Qué calzado conviene en la sala de ordeña?', o: ['Botas antideslizantes', 'Zapatillas de tela', 'Sandalias', 'Cualquiera, si voy con cuidado'], w: 'El piso mojado exige calzado antideslizante.' }]),
      Q('si_ag_apl_epp', [{ q: 'Se pueden mezclar dos productos de limpieza para que limpien más.', vf: false, w: 'Falso. Pueden generar gases tóxicos.' }]),
      Q('si_ag_tdf_prot', [{ q: 'Antes de limpiar un equipo de ordeña, tú:', o: ['Lo apago y desconecto', 'Lo limpio andando', 'Lo mojo con manguera encendido', 'Pido que otro lo limpie andando'], w: 'Equipos apagados evitan atrapamientos y descargas.' }])
    ]
  });
  T.push({
    id: 'lc_animales', sec: 'lecheria', emp: [ag], title: 'Manejo de vacunos y zoonosis', thumb: 'si_ag_ter_perro', mins: 10,
    learn: [
      { s: 'si_ag_ter_perro', t: 'Un animal puede golpearte', x: 'Una vaca o un toro puede <b>patear, embestir o aplastarte</b> contra una pared. Acércate de frente y con calma, que te vea, nunca por detrás ni con ruidos fuertes. Las vacas recién paridas se ponen más agresivas.', k: 'Que te vea: acércate de frente y con calma.' },
      { s: 'si_ag_esc_ok', t: 'Corrales y mangas', x: '<ul><li>Trabaja con una <b>ruta de escape</b> libre.</li><li>No te metas en un espacio donde el animal te acorrale.</li><li>Los toros, solo personal capacitado y nunca solo.</li></ul>', k: 'Siempre una salida libre.' },
      { s: 'si_ag_abe_ropa', t: 'Zoonosis: enfermedades de los animales', x: 'Algunas enfermedades pasan del animal a la persona: <b>brucelosis, leptospirosis, fiebre Q</b>. Pasan por leche cruda, abortos, orina y heridas. Usa <b>guantes</b>, lávate las manos, cubre tus heridas y no tomes leche sin pasteurizar.', k: 'Guantes, manos limpias y leche pasteurizada.' },
      { s: 'si_ag_apl_epp', t: 'Partos, abortos y medicamentos', x: 'En partos y abortos usa guantes largos, delantal y lentes, y lávate bien. Las vacunas y agujas se manejan con cuidado y se botan en un recipiente rígido. Si te pinchas o te muerde un animal, <b>avisa y consulta a tu mutualidad</b>.', k: 'Guantes, lavado y avisar de pinchazos o mordeduras.' }
    ],
    quiz: [
      Q('si_ag_ter_perro', [{ q: '¿Cómo te acercas a una vaca?', o: ['De frente y con calma, para que te vea', 'Por detrás para sorprenderla', 'Corriendo para ir más rápido', 'Gritando para que se mueva'], w: 'El animal que no te ve puede patear por susto.' }]),
      Q('si_ag_esc_ok', [{ q: 'Al trabajar en el corral debes dejar una ruta de escape libre.', vf: true, w: 'Verdadero. Evita quedar acorralado.' }]),
      Q('si_ag_abe_ropa', [{ q: 'Para evitar la brucelosis, ¿qué haces?', o: ['Uso guantes y no tomo leche cruda', 'Pruebo la leche para ver si está buena', 'Toco abortos sin guantes', 'Me lavo las manos solo si me acuerdo'], w: 'La leche cruda y los abortos transmiten la enfermedad.' }])
    ]
  });
  // Riesgos del puesto para la inducción
  window.SI_IND_PUESTO = window.SI_IND_PUESTO || {};
  window.SI_IND_PUESTO.maiz = '<li><b>Maíz (cosecha, silos y secado):</b> atrapamiento en picadora, cardán y sinfín; enterramiento en silos; gases y polvo; volcamiento de tractor y carros; sol y calor. <span class="ctrl">✅ Control:</span> protectores puestos, detener y bloquear antes de destrabar, no entrar al silo sin permiso ni acompañante, mascarilla, legionario y agua.</li>';
  window.SI_IND_PUESTO.lecheria = '<li><b>Lechería y animales:</b> patadas y golpes de animales, caídas por piso mojado, químicos de limpieza, zoonosis (brucelosis, leptospirosis), atrapamiento en equipos. <span class="ctrl">✅ Control:</span> acercarse de frente, botas antideslizantes, guantes y lentes, lavado de manos, no tomar leche cruda y equipos apagados antes de limpiar.</li>';
})();
