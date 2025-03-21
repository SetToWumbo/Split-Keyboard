module.exports = {
    params: {
      class: 'HOLE',
    },
    body: p => `
      (module HOLE_M2_TH (layer F.Cu) (tedit 5A52E4A3) 
        ${p.at /* parametric position */}   
        ${'' /* footprint reference */}

        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) hide (effects (font (size 0.29972 0.29972) (thickness 0.0762))))
        (pad "" np_thru_hole circle (at 0 0 90) (size 4.7004 4.7004) (drill 4.7004) (layers *.Cu *.Mask F.SilkS) (clearance 0.3)))
    `
}