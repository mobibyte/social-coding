//
//  ContentView.swift
//  iOS
//
//  Created by Diego on 2/22/24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image("mobilogo")
                .resizable()
                .aspectRatio(contentMode: .fit)
            
            Text("MOBI")
            Text("Discover the magic of making apps")
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
