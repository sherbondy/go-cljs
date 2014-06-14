// Compiled by ClojureScript 0.0-2234
goog.provide('go.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
go.core.board_size_choices = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,11,13,19], null);
go.core.board_size = 11;
go.core.square = (function square(n){return (n * n);
});
go.core.board = cljs.core.vec.call(null,cljs.core.repeat.call(null,go.core.square.call(null,go.core.board_size),new cljs.core.Keyword(null,"empty","empty",1110538431)));
go.core.board_text = (function board_text(board){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",(function (){var iter__4263__auto__ = (function iter__6810(s__6811){return (new cljs.core.LazySeq(null,(function (){var s__6811__$1 = s__6811;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6811__$1);if(temp__4126__auto__)
{var s__6811__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6811__$2))
{var c__4261__auto__ = cljs.core.chunk_first.call(null,s__6811__$2);var size__4262__auto__ = cljs.core.count.call(null,c__4261__auto__);var b__6813 = cljs.core.chunk_buffer.call(null,size__4262__auto__);if((function (){var i__6812 = 0;while(true){
if((i__6812 < size__4262__auto__))
{var row = cljs.core._nth.call(null,c__4261__auto__,i__6812);cljs.core.chunk_append.call(null,b__6813,(function (){var start = (row * go.core.board_size);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subvec.call(null,board,start,(start + go.core.board_size))));
})());
{
var G__6814 = (i__6812 + 1);
i__6812 = G__6814;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6813),iter__6810.call(null,cljs.core.chunk_rest.call(null,s__6811__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6813),null);
}
} else
{var row = cljs.core.first.call(null,s__6811__$2);return cljs.core.cons.call(null,(function (){var start = (row * go.core.board_size);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subvec.call(null,board,start,(start + go.core.board_size))));
})(),iter__6810.call(null,cljs.core.rest.call(null,s__6811__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4263__auto__.call(null,cljs.core.range.call(null,go.core.board_size));
})()));
});
go.core.turn_text = (function turn_text(turn){return ("Turn: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__6816 = cljs.core.mod.call(null,turn,2);switch (G__6816) {
case 0:
return "Black";

break;
case 1:
return "White";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,turn,2)))));

}
})()));
});
go.core.turn_stone = (function turn_stone(turn){var G__6819 = cljs.core.mod.call(null,turn,2);switch (G__6819) {
case 0:
return new cljs.core.Keyword(null,"black","black",1107723121);

break;
case 1:
return new cljs.core.Keyword(null,"white","white",1127006107);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,turn,2)))));

}
});
go.core.Stringable = (function (){var obj6822 = {};return obj6822;
})();
go.core.as_str = (function as_str(this$){if((function (){var and__3526__auto__ = this$;if(and__3526__auto__)
{return this$.go$core$Stringable$as_str$arity$1;
} else
{return and__3526__auto__;
}
})())
{return this$.go$core$Stringable$as_str$arity$1(this$);
} else
{var x__4165__auto__ = (((this$ == null))?null:this$);return (function (){var or__3538__auto__ = (go.core.as_str[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (go.core.as_str["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Stringable.as-str",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
* @param {*} board
* @param {*} turn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
go.core.GameState = (function (board,turn,__meta,__extmap){
this.board = board;
this.turn = turn;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
go.core.GameState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4124__auto__,k__4125__auto__){var self__ = this;
var this__4124__auto____$1 = this;return cljs.core._lookup.call(null,this__4124__auto____$1,k__4125__auto__,null);
});
go.core.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4126__auto__,k6824,else__4127__auto__){var self__ = this;
var this__4126__auto____$1 = this;var G__6826 = (((k6824 instanceof cljs.core.Keyword))?k6824.fqn:null);switch (G__6826) {
case "turn":
return self__.turn;

break;
case "board":
return self__.board;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6824,else__4127__auto__);

}
});
go.core.GameState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4138__auto__,writer__4139__auto__,opts__4140__auto__){var self__ = this;
var this__4138__auto____$1 = this;var pr_pair__4141__auto__ = ((function (this__4138__auto____$1){
return (function (keyval__4142__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4139__auto__,cljs.core.pr_writer,""," ","",opts__4140__auto__,keyval__4142__auto__);
});})(this__4138__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4139__auto__,pr_pair__4141__auto__,"#go.core.GameState{",", ","}",opts__4140__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"board","board",1107812952),self__.board],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"turn","turn",1017476079),self__.turn],null))], null),self__.__extmap));
});
go.core.GameState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4122__auto__){var self__ = this;
var this__4122__auto____$1 = this;return self__.__meta;
});
go.core.GameState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4118__auto__){var self__ = this;
var this__4118__auto____$1 = this;return (new go.core.GameState(self__.board,self__.turn,self__.__meta,self__.__extmap,self__.__hash));
});
go.core.GameState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4128__auto__){var self__ = this;
var this__4128__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
go.core.GameState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4119__auto__){var self__ = this;
var this__4119__auto____$1 = this;var h__3949__auto__ = self__.__hash;if(!((h__3949__auto__ == null)))
{return h__3949__auto__;
} else
{var h__3949__auto____$1 = cljs.core.hash_imap.call(null,this__4119__auto____$1);self__.__hash = h__3949__auto____$1;
return h__3949__auto____$1;
}
});
go.core.GameState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4120__auto__,other__4121__auto__){var self__ = this;
var this__4120__auto____$1 = this;if(cljs.core.truth_((function (){var and__3526__auto__ = other__4121__auto__;if(cljs.core.truth_(and__3526__auto__))
{return ((this__4120__auto____$1.constructor === other__4121__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4120__auto____$1,other__4121__auto__));
} else
{return and__3526__auto__;
}
})()))
{return true;
} else
{return false;
}
});
go.core.GameState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4133__auto__,k__4134__auto__){var self__ = this;
var this__4133__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"turn","turn",1017476079),null,new cljs.core.Keyword(null,"board","board",1107812952),null], null), null),k__4134__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4133__auto____$1),self__.__meta),k__4134__auto__);
} else
{return (new go.core.GameState(self__.board,self__.turn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4134__auto__)),null));
}
});
go.core.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4131__auto__,k__4132__auto__,G__6823){var self__ = this;
var this__4131__auto____$1 = this;var pred__6827 = cljs.core.keyword_identical_QMARK_;var expr__6828 = k__4132__auto__;if(cljs.core.truth_(pred__6827.call(null,new cljs.core.Keyword(null,"board","board",1107812952),expr__6828)))
{return (new go.core.GameState(G__6823,self__.turn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6827.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079),expr__6828)))
{return (new go.core.GameState(self__.board,G__6823,self__.__meta,self__.__extmap,null));
} else
{return (new go.core.GameState(self__.board,self__.turn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4132__auto__,G__6823),null));
}
}
});
go.core.GameState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4136__auto__){var self__ = this;
var this__4136__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"board","board",1107812952),self__.board],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"turn","turn",1017476079),self__.turn],null))], null),self__.__extmap));
});
go.core.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4123__auto__,G__6823){var self__ = this;
var this__4123__auto____$1 = this;return (new go.core.GameState(self__.board,self__.turn,G__6823,self__.__extmap,self__.__hash));
});
go.core.GameState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4129__auto__,entry__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4130__auto__))
{return cljs.core._assoc.call(null,this__4129__auto____$1,cljs.core._nth.call(null,entry__4130__auto__,0),cljs.core._nth.call(null,entry__4130__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4129__auto____$1,entry__4130__auto__);
}
});
go.core.GameState.prototype.go$core$Stringable$ = true;
go.core.GameState.prototype.go$core$Stringable$as_str$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(go.core.turn_text.call(null,self__.turn))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(go.core.board_text.call(null,self__.board)));
});
go.core.GameState.cljs$lang$type = true;
go.core.GameState.cljs$lang$ctorPrSeq = (function (this__4158__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"go.core/GameState");
});
go.core.GameState.cljs$lang$ctorPrWriter = (function (this__4158__auto__,writer__4159__auto__){return cljs.core._write.call(null,writer__4159__auto__,"go.core/GameState");
});
go.core.__GT_GameState = (function __GT_GameState(board,turn){return (new go.core.GameState(board,turn));
});
go.core.map__GT_GameState = (function map__GT_GameState(G__6825){return (new go.core.GameState(new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(G__6825),new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(G__6825),null,cljs.core.dissoc.call(null,G__6825,new cljs.core.Keyword(null,"board","board",1107812952),new cljs.core.Keyword(null,"turn","turn",1017476079))));
});
go.core.game = cljs.core.atom.call(null,(new go.core.GameState(go.core.board,0)));
go.core.turn_stone.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,go.core.game)));
go.core.place_stone = (function place_stone(board,stone,x,y){return cljs.core.assoc.call(null,board,(x + (go.core.board_size * y)),stone);
});
go.core.valid_move_QMARK_ = (function valid_move_QMARK_(board,stone,x,y){return true;
});
go.core.board_elem = document.getElementById("board");
go.core.render_BANG_ = (function render_BANG_(){return go.core.board_elem.innerHTML = go.core.as_str.call(null,cljs.core.deref.call(null,go.core.game));
});
go.core.render_BANG_.call(null);
cljs.core.add_watch.call(null,go.core.game,new cljs.core.Keyword(null,"render-board","render-board",651112289),(function (k,r,o,n){return go.core.render_BANG_.call(null);
}));
go.core.move_input = document.getElementById("move");
go.core.sanitize_move = (function sanitize_move(move_val){return cljs.core.map.call(null,parseInt,clojure.string.split.call(null,move_val,/,/));
});
go.core.game_update_fn = (function game_update_fn(x,y){return (function (game){return cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",1107812952)], null),go.core.place_stone,go.core.turn_stone.call(null,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(game)),x,y);
});
});
go.core.ENTER = 13;
go.core.handle_move = (function handle_move(e){if(cljs.core._EQ_.call(null,e.keyCode,go.core.ENTER))
{var move_val = go.core.move_input.value;var vec__6832 = go.core.sanitize_move.call(null,move_val);var x = cljs.core.nth.call(null,vec__6832,0,null);var y = cljs.core.nth.call(null,vec__6832,1,null);return cljs.core.swap_BANG_.call(null,go.core.game,go.core.game_update_fn.call(null,x,y));
} else
{return null;
}
});
go.core.handle_move.call(null,{"keyCode": 13});
go.core.move_input.addEventListener("keyup",go.core.handle_move);
go.core.move_input.removeEventListener("keyup");

//# sourceMappingURL=core.js.map